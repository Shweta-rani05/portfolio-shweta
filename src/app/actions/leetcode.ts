"use server";

export async function fetchLeetcodeStats(username: string) {
  const query = `
    query getUserProfile($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        username
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        profile {
          ranking
        }
        submissionCalendar
      }
    }
  `;

  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 }, // Cache server-side for 1 hour to avoid rate limits
    });

    if (!response.ok) {
      throw new Error(`LeetCode API returned status ${response.status}`);
    }

    const result = await response.json();
    if (result.errors) {
      console.error("LeetCode GraphQL Errors:", result.errors);
      return { success: false, error: "LeetCode GraphQL error" };
    }

    const matchedUser = result.data?.matchedUser;
    const allQuestionsCount = result.data?.allQuestionsCount;

    if (!matchedUser) {
      return { success: false, error: "User profile is private or not found" };
    }

    const getCount = (arr: any[], diff: string) => {
      const item = arr.find((x: any) => x.difficulty === diff);
      return item ? item.count : 0;
    };

    const acSubmissions = matchedUser.submitStats.acSubmissionNum;
    
    const easySolved = getCount(acSubmissions, "Easy");
    const mediumSolved = getCount(acSubmissions, "Medium");
    const hardSolved = getCount(acSubmissions, "Hard");
    const totalSolved = getCount(acSubmissions, "All");

    const totalEasy = getCount(allQuestionsCount, "Easy");
    const totalMedium = getCount(allQuestionsCount, "Medium");
    const totalHard = getCount(allQuestionsCount, "Hard");

    return {
      success: true,
      data: {
        totalSolved,
        easySolved,
        mediumSolved,
        hardSolved,
        totalEasy,
        totalMedium,
        totalHard,
        ranking: matchedUser.profile.ranking,
        submissionCalendar: matchedUser.submissionCalendar,
      }
    };
  } catch (error) {
    console.error("Failed to fetch LeetCode stats via GraphQL Server Action:", error);
    return { success: false, error: "Failed to connect to LeetCode API" };
  }
}
