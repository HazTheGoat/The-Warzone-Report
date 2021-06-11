import API from "@callofduty/api";

// Step 1: Instantiate the API
const CallOfDutyAPI = new API();
// Step 2: Login with email + password (top-level await as shown below may not be available in your environment, wrap as necessary)
const { xsrf, sso, atkn } = await CallOfDutyAPI.Authorize(
  "hazaraskari@gmail.com",
  "#VfTMC!%WanZ5B#"
);
// Step 3: Update API instance and continue as an authenticated user
CallOfDutyAPI.UseTokens({ xsrf, sso, atkn });
// Step 4: Fetch the identity for this account to find username/platform for desired game
const { titleIdentities } = await CallOfDutyAPI.Identity();

// Step 5: Filter for game-specific profiles (we'll use MW and assume there is only one profile but multiple are supported)
// const { username, platform } = titleIdentities.find(
//   (identity) => identity.title === "mw"
// );
