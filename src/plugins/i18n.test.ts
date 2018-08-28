import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const calendarFormats: any = {
  calendarHeader: {
    month: 'long', weekday: 'long', day: 'numeric',
  },
  calendarNav:    {
    month: 'long', year: 'numeric',
  },
  datePicker:     {
    year: 'numeric', month: '2-digit', day: '2-digit',
  },
};
const dateTimeFormats: VueI18n.DateTimeFormats = {
  en: calendarFormats,
  de: calendarFormats,
};

const messages = {
  en: {
    message: {
      "App.core.description": "The Long-Term Jobs Market of Haiti",
      "App.nav.jobs": "Jobs",
      "App.nav.profile": "Profile",
      "App.nav.wallet": "Wallet",
      "App.nav.signin": "Sign in",
      "App.nav.signout": "Sign out",
      "App.nav.createJob": "Post a Job",
      "App.nav.kreyol": "kreyòl",
      "App.nav.french": "Francais",
      "App.nav.english": "Angle",
      "App.nav.home": "Home",
      "App.sectionOne.blockTitle": "Earn Stable Income",
      "App.sectionOne.blockHeader": "Same Day Jobs Marketplace",
      "App.sectionOne.blockText":
        "Travay provides a citizen driven, long-term jobs market, helping to provide to economic mobility.",
      "App.sectionTwo.blockTitle": "Receive Instant Payments",
      "App.sectionTwo.blockHeader": "Jobs Paid in Cryptocurrency",
      "App.sectionTwo.blockText":
        "Cryptocurrency Payment = Instant Access to Your Money.",
      "App.sectionFour.blockTitle": "How Does Travay Work?",
      "App.sectionFour.bullet1": "Register by signing in",
      "App.sectionFour.bullet2": "Find a job your want and click claim",
      "App.sectionFour.bullet3":
        "When work is complete, upload your proof of work and click complete job",
      "App.sectionFour.bullet4":
        "Your Job Manager will approve work and issue payment",
      "App.sectionFour.paragraph":
        "Find a job, claim it with no experience needed!",
      "App.job.editJobIcon": "Edit",
      "App.job.pageHeader": "Job",
      "App.job.jobDescription": "Description",
      "App.job.jobDomain": "Domain",
      "App.job.jobSkill": "Skill",
      "App.job.salaryIsEditing": "Salary cannot be changed after job is posted.",
      "App.job.payFrequencyIsEditing":
        "Pay frequency cannot be changed after job is posted.",
      "App.job.termOfEmploymentIsEditing":
        "Term of Employment cannot be changed after job is posted.",
      "App.job.requirementInstructions":
        "Add one requirement, then click Add Requirement, to add additional requirements.",
      "App.job.addRequirement": "Add Requirement",
      "App.job.jobFullTimeRate": "Full-Time-Rate",
      "App.job.jobSponsoredAmount": "Sponsored Amount",
      "App.job.jobPayFrequency": "Pay Frequency",
      "App.job.termsOfEmployment": "Terms of Employment",
      "App.job.requirements": "Requirements",
      "App.job.postChangesButton": "Post Changes",
      "App.job.cancleJob": "Cancel Job",
      "App.job.datePosted": "Date Posted",
      "App.job.claimTitle": "Claim",
      "App.job.claimDescription":
        "A job is claimed when an individual has chosen to accept the work. A potential worker will see in this area any additional criteria and requirements before accepting the job.",
      "App.job.sponsorDescription":
        "Job sponsorship is where anyone in the world can donate and contribute to the workplace ecosystem. Choosing to sponsor ensures transparency in funds donated and incentives job workers to continue to perform and accept jobs.",
      "App.job.claimDisclaimer":
        "Claiming this position is to accept the job requirements and terms and conditions of Travay.",
      "App.job.sponsorJobButton": "Sponsor Job",
      "App.job.proofOfWorkTitle": "Proof of Work",
      "App.job.uploadProofOfWorkTitle": "Upload Proof of Work",
      "App.job.proofOfWorkDescription":
        "Based on the requirements of a job, the Job Manager may request proof that work was completed. For example, a picture of a planted tree or that trash was deposited in the correct location.",
      "App.job.uploadFileButton": "Submit Proof",
      "App.job.approveWork": "Approve Work",
      "App.job.approveWorkDescription":
        "Approval history will be shown here. Once a job is approved, the job is marked complete and the worker receives their salary. This is not reversible.",
      "App.job.payoutJobButton": "Payout Job",
      "App.job.jobCanceledNotificationTitle": "Success!",
      "App.job.jobCanceledNotificationText": "This job has been cancelled.",
      "App.job.jobSavedNotificationTitle": "Success",
      "App.job.jobSavedNotification": "The job has been saved!",
      "App.job.jobEmptyFieldNotificationTitle": "Oops",
      "App.job.jobEmptyFieldNotificationText": "Please complete all fields.",
      "App.job.jobClaimedNotificationTitle": "Yay!",
      "App.job.jobClaimedNotificationText":
        "Job confirmed successfully! You can start work immediately.",
      "App.job.jobPayoutNotificationTitle": "Your worker thanks you!",
      "App.job.jobPayoutNotificationTitleText":
        "Payout Complete. Your account is being debited.",
      "App.job.jobUpdatedNotificationTitle": "Success!",
      "App.job.jobUpdatedNotificationText": "Job updated successfully",
      "App.job.jobPayout": "Payout Complete. Your account is being debited.",
      "App.job.uploadedPhotoSuccessfully": "Post was created successfully.",
      "App.job.uploadedPhotoProgress": "Upload is",
      "App.job.uploadedPhotoProgress2": "% done. Processing post.",
      "App.job.markJobComplete": "Job is Done",
      "App.job.jobCompletedNotificationTitle": "Success",
      "App.job.jobCompleteNotificationText":
        "This job has been marked completed. Your Job Manager and Evaluator will review the work and send payment after confirming.",
      "App.jobs.pageSubtitle": "Here you'll find 6-month and 12-month jobs.",
      "App.jobs.search": "Search",
      "App.jobs.filter": "Filter",
      "App.createJob.salaryPayoutDisclaimer":
        "Remember: (1) The salary you list above will be deducted and paid to the worker evenly based on the pay frequency (aka pay period) you've selected. (2) We collect 2% of the total salary amount. Based on the salary you have entered above the worker in total will receive approximately: ",
      "App.createJob.pageDescription":
        "Use the form below to create a 6-month or 12-month job.",
      "App.createJob.requirementInstructions":
        "Please add your requirements in order for the job to be considered as complete. Add one requirement, then click Add Requirement, to add additional requirements.",
      "components.autocomplete.emptyMessage": "No options found for %s",
      "components.calendar.friday.short": "F",
      "components.calendar.monday.short": "M",
      "components.calendar.saturday.short": "S",
      "components.calendar.sunday.short": "S",
      "components.calendar.thursday.short": "T",
      "components.calendar.tuesday.short": "T",
      "components.calendar.wednesday.short": "W",
      "components.dataTable.noResults": "No results found!",
      "components.formExample.zipCode.error": "Please enter a Number",
      "components.markdown":
        "### Markdown support\n - build on top of marked\n - server side rendering!!!\n - `github style` markdown",
      "components.pagination.next": "Next",
      "components.pagination.previous": "Previous",
      "components.register.cancellationText": "Cancel",
      "components.register.consent": "I consent to get contacted",
      "components.register.email": "Email",
      "components.register.email.invalidText": "This is not a valid email address!",
      "components.register.name": "Name",
      "components.register.name.invalidText": "Please provide first and last name",
      "components.register.phone": "Phone",
      "components.register.phone.invalidText": "This is not a valid phone number!",
      "components.register.submit.notification.text":
        "We've sent an email to: {email}!",
      "components.register.submit.notification.title": "Hey {name}!",
      "components.register.submitText": "Submit",
      "components.register.subtitle": "Please fill in all required fields",
      "components.register.terms":
        "I accept the <a href=\"/\">Terms and Conditions</a>",
      "components.register.title": "Register",
      "components.truncate.showLess": "Show less",
      "components.truncate.showMore": "Show more"
    },
  },
}

const i18n = new VueI18n({
    locale: 'en',
    messages,
    dateTimeFormats,
  },
);

window['$d'] = i18n.d.bind(i18n);
window['$t'] = i18n.t.bind(i18n);
window['$i18n'] = i18n;

export default i18n;