---
sidebar_position: 999
---

# Troubleshooting and Support

## Questions, bug reports, feature requests

If you have any questions or encounter issues while using our app, please don't hesitate to reach out to [our support team](https://kaisersoftapps.atlassian.net/servicedesk/customer/portal/1).

To help resolve your issue efficiently, our support team may request debugging information from the app. Please follow these steps to provide it:

1. Navigate to the **Jira Admin** menu and select **Apps**.
2. In the **Apps** section, choose **FieldCraft: Custom Fields** and click on the **Settings** tab.
3. Scroll down to the **Troubleshooting and Support** section and copy the details from the debugging panel.
4. Kindly share this debugging information with our team when requested.


## How to Verify the Calculation of an Auto-Calculated Custom Field in Jira

This guide will help you review the calculation details for custom fields like "Time in Status" and investigate any discrepancies between the calculated time and your expectations.

1. **Navigate to Custom Fields**:  
   Go to **Settings** → **Issues** → **Custom Fields**.
   
2. **Locate the Custom Field**:  
   Find the specific custom field you want to verify, then open its **context configuration** page.

3. **Review the Field Configuration**:  
   Scroll down to the **Check with issue** section on the configuration page.

4. **Test with an Issue**:  
   Enter the relevant issue key in the provided field and click **Test**.

5. **Review the Results**:  
   Check the expected result and the corresponding logs for any discrepancies.

6. **Submit Logs to Support**:  
   Copy the log details and send them to our support team for further investigation.

![](./img/test-with-issue-screen.png)


## "Time in Status" Calculation is Not Fully Precise

Currently, the app calculates ["Time in Status"](../time-in-status/index.md) based on [Work Calendars](../work-calendars/index.md) and Jira time settings. However, this approach may lead to discrepancies in change log timestamps and durations.ку

**Key Issues:**
1. **Time Zone Differences** – Each user views issue history with their own time zone offset. As a result, a status change made during a user's working hours might appear outside of working hours in the Work Calendar.
2. **Skipped Short-Term Changes** – Due to performance constraints and [calculation limitations in Forge](https://developer.atlassian.com/platform/forge/platform-quotas-and-limits/), frequent or short-duration status changes (e.g., a status change lasting only a few minutes) might be skipped.

These factors can affect the accuracy of "Time in Status" calculations, potentially leading to misleading results.
