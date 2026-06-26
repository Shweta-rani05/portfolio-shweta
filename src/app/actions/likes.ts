"use server";

import fs from "fs/promises";
import path from "path";

const LIKES_FILE = path.join(process.cwd(), "src/data/likes.json");

// In-memory fallback for read-only serverless environments
let memoryCount = 10;
let useMemoryFallback = false;

async function ensureFileExists() {
  if (useMemoryFallback) return;
  try {
    await fs.access(LIKES_FILE);
  } catch {
    try {
      await fs.mkdir(path.dirname(LIKES_FILE), { recursive: true });
      await fs.writeFile(LIKES_FILE, JSON.stringify({ count: 10 }, null, 2));
    } catch (e) {
      console.warn("Filesystem not writeable, falling back to memory storage.");
      useMemoryFallback = true;
    }
  }
}

export async function getLikes() {
  try {
    if (useMemoryFallback) {
      return { success: true, count: memoryCount };
    }
    await ensureFileExists();
    const data = await fs.readFile(LIKES_FILE, "utf-8");
    const { count } = JSON.parse(data);
    return { success: true, count };
  } catch (error) {
    console.warn("Failed to read likes file, using memory:", error);
    useMemoryFallback = true;
    return { success: true, count: memoryCount };
  }
}

export async function toggleLike(hasLiked: boolean) {
  try {
    let currentCount = memoryCount;
    if (!useMemoryFallback) {
      try {
        await ensureFileExists();
        const data = await fs.readFile(LIKES_FILE, "utf-8");
        const parsed = JSON.parse(data);
        currentCount = parsed.count;
      } catch {
        useMemoryFallback = true;
      }
    }

    if (hasLiked) {
      currentCount = Math.max(0, currentCount - 1);
    } else {
      currentCount = currentCount + 1;
    }
    
    memoryCount = currentCount;

    if (!useMemoryFallback) {
      try {
        await fs.writeFile(LIKES_FILE, JSON.stringify({ count: currentCount }, null, 2));
      } catch (e) {
        console.warn("Failed to write likes file, using memory only");
        useMemoryFallback = true;
      }
    }

    return { success: true, count: currentCount };
  } catch (error) {
    console.error("Error toggling like:", error);
    return { success: false, count: memoryCount };
  }
}
