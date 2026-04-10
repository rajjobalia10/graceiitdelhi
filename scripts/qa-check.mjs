import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const baseUrl = process.argv[2] ?? "http://127.0.0.1:3001";
const results = {};

try {
  await page.goto(`${baseUrl}/sign-in`);
  await page.waitForTimeout(1000);
  await page.getByLabel("Full Name").fill("Shubham Shashwat");
  await page.getByLabel("Email").fill("shubham@example.com");
  await page.getByLabel("City").fill("Bangalore");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.waitForTimeout(1200);
  results.afterSignInUrl = page.url();
  results.session = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("circle.session") || "null")
  );
  if (!results.afterSignInUrl.endsWith("/my-groups")) {
    throw new Error(
      `Sign-in did not redirect to /my-groups. Current URL: ${results.afterSignInUrl}`
    );
  }

  await page.goto(`${baseUrl}/groups/night-owls`);
  await page.waitForTimeout(600);
  await page.getByRole("button", { name: "Join Group" }).click();
  await page.waitForTimeout(250);
  results.joinedGroups = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("circle.joinedGroups") || "[]")
  );

  await page.goto(`${baseUrl}/my-groups`);
  await page.waitForTimeout(600);
  results.myGroupsContainsNightOwls = await page
    .getByRole("heading", { name: "Night Owls" })
    .isVisible();

  await page.goto(`${baseUrl}/apply`);
  await page.waitForTimeout(1000);
  await page.locator("#jf-name").fill("Shubham Shashwat");
  await page.locator("#jf-age").fill("25");
  await page.locator("#jf-city").fill("Bangalore");
  await page.locator("#jf-marital").selectOption("unmarried");
  await page.locator("#jf-occupation").fill("Founder");
  await page.locator("#jf-email").fill("shubham@example.com");
  await page.locator("#jf-whatsapp").fill("+91 9999999999");
  await page.locator("#jf-instagram").fill("https://instagram.com/shubham");
  await page
    .locator("#jf-linkedin")
    .fill("https://www.linkedin.com/in/shubham-shashwat-86514520b/");
  await page
    .locator("#jf-why")
    .fill(
      "I bring community energy, I host meetups often, and I want to help Circle feel alive offline."
    );
  await page.getByRole("button", { name: "Join Circle Standouts" }).click();
  await page.waitForTimeout(1000);
  results.applicationStored = await page.evaluate(() =>
    Boolean(localStorage.getItem("circle.applicationSubmission"))
  );
  results.applicationSuccess = await page
    .getByRole("heading", { name: /You're in, Shubham Shashwat!/ })
    .isVisible();

  await page.goto(baseUrl);
  results.socialLinks = await page
    .locator('footer a[target="_blank"]')
    .evaluateAll((elements) =>
      elements.map((element) => element.getAttribute("href"))
    );

  console.log(JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
