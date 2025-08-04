import { clerkClient } from "@clerk/clerk-sdk-node";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readFileAsDataUrl(file: File | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Unexpected result type"));
      }
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file as Data URL"));
    };

    reader.readAsDataURL(file);
  });
}

// created date handler
export function timeAgo(date: Date | string | undefined | null): string {
  if (!date) return "unknown";

  const now = new Date();
  const past = typeof date === "string" ? new Date(date) : date;

  if (!(past instanceof Date) || isNaN(past.getTime())) {
    return "unknown";
  }

  const diffMs = now.getTime() - past.getTime();

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSeconds < 5) return "Just now";
  if (diffSeconds < 60) return `${diffSeconds}s ago`;
  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return `Yesterday`;
  return `${diffDays}d ago`;
}

// Function to get username (or other properties) by Clerk userId

export async function getClerkUsername(userId: string): Promise<string | null> {
  try {
    const user = await clerkClient.users.getUser(userId);
    return user.username || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
