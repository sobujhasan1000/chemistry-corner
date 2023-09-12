import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import classNames from "classnames";
import { BsChatSquareText, BsGear } from "react-icons/bs";
import { CiLock, CiLogin } from "react-icons/ci";
import { LiaUser } from "react-icons/lia";
import { GiSettingsKnobs } from "react-icons/gi";
import { PiCodeSimpleLight } from "react-icons/pi";
import { GoCheckbox } from "react-icons/go";
import { Link } from "react-router-dom";

const FaqQuestions = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const faqLists = [
    { label: "Getting Started", icon: BsGear, value: "gettingStarted" },
    { label: "User Login", icon: CiLogin, value: "userLogin" },
    { label: "My Account", icon: LiaUser, value: "myAccount" },
    { label: "Security", icon: CiLock, value: "security" },
    { label: "Communication", icon: BsChatSquareText, value: "communication" },
    {
      label: "Settings Option",
      icon: GiSettingsKnobs,
      value: "settingsOption",
    },
    { label: "Customization", icon: PiCodeSimpleLight, value: "customization" },
    { label: "User Rating", icon: GoCheckbox, value: "userRating" },
  ];
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button on the homepage and follow the registration process. You'll need to provide some basic information and set up your profile.",
      category: "gettingStarted",
    },
    {
      question: "Can I use a nickname instead of my real name?",
      answer:
        "Yes, you can use a nickname or a username if you prefer not to use your real name. Just make sure it's unique and doesn't violate our community guidelines.",
      category: "gettingStarted",
    },
    {
      question: "What are the photo requirements for my profile picture?",
      answer:
        "Your profile picture should be a clear and appropriate image of yourself. Avoid using group photos or images that do not represent you accurately.",
      category: "gettingStarted",
    },
    {
      question: "How can I search for other users on the platform?",
      answer:
        "You can search for other users by using our search feature. Enter specific criteria such as age, location, and interests to find potential matches.",
      category: "gettingStarted",
    },
    {
      question: "Is my information kept private and secure?",
      answer:
        "Yes, we take your privacy and security seriously. We use advanced encryption and security measures to protect your data, and we do not share your information without your consent.",
      category: "gettingStarted",
    },
    {
      question: "How can I log in to my account?",
      answer:
        "You can log in by entering your email address and password on the login page. Make sure to use the credentials you provided during registration.",
      category: "userLogin",
    },
    {
      question: "I forgot my password. What should I do?",
      answer:
        " If you forget your password, click on the 'Forgot Password' link on the login page. We'll send you instructions on how to reset your password to your registered email address.",
      category: "userLogin",
    },
    {
      question: "Can I change my email address associated with my account?",
      answer:
        "Yes, you can change your email address in the 'My Account' settings. Make sure to verify the new email address to complete the change.",
      category: "userLogin",
    },
    {
      question:
        "Is two-factor authentication (2FA) available for added security?",
      answer:
        "Yes, we offer two-factor authentication as an extra layer of security. You can enable it in your account settings for enhanced protection.",
      category: "userLogin",
    },
    {
      question: "Can I log in using my social media accounts?",
      answer:
        "Yes, you can log in using your social media accounts for added convenience. Just link your social media profiles to your account during registration.",
      category: "userLogin",
    },
    {
      question: "How can I edit my profile information?",
      answer:
        "To edit your profile, go to the 'My Account' section and click on 'Edit Profile.' You can update your photos, bio, and other details there.",
      category: "myAccount",
    },
    {
      question: "How do I add or change my profile picture?",
      answer:
        "You can add or change your profile picture by going to the 'Edit Profile' section. Upload a clear and appropriate image of yourself.",
      category: "myAccount",
    },
    {
      question: "Can I hide my profile from specific users?",
      answer:
        "Yes, you can set privacy preferences to control who can see your profile. You can choose to hide it from specific users or make it public.",
      category: "myAccount",
    },
    {
      question: "What information is visible to other users on my profile?",
      answer:
        "Your profile may include basic information such as your username, profile picture, age, location, and interests. You can customize what you share in your privacy settings.",
      category: "myAccount",
    },
    {
      question: "How can I deactivate or delete my account?",
      answer:
        "You can deactivate or delete your account in the 'Account Settings' section. Deactivation allows you to temporarily hide your profile, while deletion permanently removes your account and data.",
      category: "myAccount",
    },
    {
      question:
        "What measures are in place to ensure the security of user data?",
      answer:
        "We take the security of your data seriously. We use advanced encryption and security protocols to protect your information. We also have a team dedicated to monitoring and preventing any suspicious activities.",
      category: "security",
    },
    {
      question:
        "How can I report a user for suspicious or inappropriate behavior?",
      answer:
        "If you encounter a user with suspicious or inappropriate behavior, please report them through our reporting feature. Our team will investigate and take appropriate action.",
      category: "security",
    },
    {
      question: "Is my financial information secure on the platform?",
      answer:
        "Yes, your financial information is securely handled by trusted payment processors. We do not store or handle your payment details directly.",
      category: "security",
    },
    {
      question: "Are there safety tips for meeting someone in person?",
      answer:
        "We recommend meeting in public places for your safety. Share your plans with a trusted friend, and always trust your instincts when meeting someone for the first time.",
      category: "security",
    },
    {
      question: " How can I enable account recovery options?",
      answer:
        "You can enable account recovery options in your account settings, such as providing a backup email address or phone number. This helps you regain access to your account if needed.",
      category: "security",
    },
    {
      question:
        "How can I start a conversation with someone I'm interested in?",
      answer:
        "To start a conversation, visit the user's profile and click the Send Message button. You can also send a Like or a Wink to express interest.",
      category: "communication",
    },
    {
      question: " Is there a limit to the number of messages I can send?",
      answer:
        "We encourage meaningful conversations, but there is no strict limit on the number of messages you can send. However, be respectful of others' boundaries.",
      category: "communication",
    },
    {
      question: " How can I block or report a user?",
      answer:
        "You can block or report a user by visiting their profile and clicking the respective buttons. Reporting helps us maintain a safe and respectful community.",
      category: "communication",
    },
    {
      question: "Can I send photos and attachments in messages?",
      answer:
        "Yes, you can send photos and attachments in messages to enhance your conversations and share moments with others.",
      category: "communication",
    },
    {
      question: "What is the Match feature, and how does it work?",
      answer:
        "The Match feature suggests potential matches based on your preferences and mutual interests. You can send a message when you both express interest in each other.",
      category: "communication",
    },
    {
      question: "How can I customize my notification preferences?",
      answer:
        "You can customize your notification settings in the Settings section. Choose which notifications you want to receive and how you want to be notified.",
      category: "settingsOption",
    },
    {
      question: "What are privacy settings, and how can I adjust them?",
      answer:
        " Privacy settings allow you to control who can see your profile and contact you. You can adjust these settings to match your preferences.",
      category: "settingsOption",
    },
    {
      question: " Can I change my email or password in the settings?",
      answer:
        "Yes, you can change your email or password in the Account Settings section for added security and account management.",
      category: "settingsOption",
    },
    {
      question: " How do I enable two-factor authentication (2FA)?",
      answer:
        "You can enable two-factor authentication (2FA) in the Security Settings for an extra layer of account protection. Follow the setup instructions.",
      category: "settingsOption",
    },
    {
      question:
        " Is there a way to delete my account permanently in the settings?",
      answer:
        "Yes, you can delete your account permanently in the Account Settings section. Be aware that this action is irreversible.",
      category: "settingsOption",
    },
    {
      question: " Can I change my profile's theme or color scheme?",
      answer:
        "Yes, you can personalize your profile by choosing different themes and color schemes in the Customization section.",
      category: "customization",
    },
    {
      question: "  How can I customize my profile's background image?",
      answer:
        "You can upload a custom background image for your profile in the Customization settings to make your profile unique.",
      category: "customization",
    },
    {
      question: " Are there options to change font styles and sizes?",
      answer:
        "Yes, you can adjust font styles and sizes in the Customization settings to enhance your reading experience.",
      category: "customization",
    },
    {
      question: " Can I add a custom status or bio to my profile?",
      answer:
        "You can add a custom status and bio to your profile to let others know more about you. Edit this information in your profile settings.",
      category: "customization",
    },
    {
      question: " Is there a dark mode option for the application?",
      answer:
        "Yes, you can enable dark mode in the Customization settings if you prefer a darker theme for the app.",
      category: "customization",
    },
    {
      question: " How are user ratings and reviews calculated?",
      answer:
        "User ratings and reviews are based on feedback and interactions with other users. Positive interactions and reviews from other users contribute to a higher rating.",
      category: "userRating",
    },
    {
      question: "Can I see the ratings and reviews other users have received?",
      answer:
        "Yes, you can view the ratings and reviews on other users' profiles to get an idea of their reputation and interactions within the community.",
      category: "userRating",
    },
    {
      question: " How can I improve my user rating?",
      answer:
        " You can improve your user rating by engaging in positive interactions, being respectful, and following our community guidelines.",
      category: "userRating",
    },
    {
      question:
        " What happens if I receive a low user rating or a negative review?",
      answer:
        "Receiving a low rating or negative review may impact your overall reputation. We encourage you to address any concerns and improve your interactions.",
      category: "userRating",
    },
    {
      question: " Is there a way to dispute or respond to a negative review?",
      answer:
        "Yes, you can respond to reviews on your profile to provide your perspective or resolve any issues with other users.",
      category: "userRating",
    },
  ];

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };
  return (
    <div>
      <Helmet>
        <title>Frequently Asked Questions - Chemistry Corner</title>
      </Helmet>
      <div className="page-header-bg w-full h-48 md:h-64 bg-no-repeat bg-cover bg-center">
        <div className="backdrop-blur-lg md:backdrop-blur-xl w-full h-full flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">
            {" "}
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      <div className="my-10 md:my-20">
        <div>
          <Tabs
            selectedIndex={selectedTab}
            onSelect={handleTabSelect}
            className="flex flex-col md:flex-row-reverse items-start justify-center"
          >
            <TabList className="grid grid-cols-2 gap-3 md:gap-0 md:flex md:flex-col md:border-l md:border-gray-300 pl-8 ml-8 text-center md:text-left mb-10 md:mb-0">
              {faqLists.map((faq, index) => (
                <Tab
                  key={faq.value}
                  className={classNames(
                    "py-2 outline-none cursor-pointer hover:text-[#ED0058] border border-black md:border-none",
                    {
                      "font-bold border-none": selectedTab === index,
                      "text-black": selectedTab !== index,
                    }
                  )}
                >
                  {faq.label}
                </Tab>
              ))}
            </TabList>
            {faqLists.map(({ label, icon: Icon, value }) => (
              <TabPanel key={value} className="">
                <div className="flex flex-row items-start gap-5">
                  <Icon className="text-5xl text-[#ED0058]" />
                  <div>
                    <h2 className="text-3xl text-black">{label} FAQs</h2>
                    <p className="text-sm mt-5 mb-10 text-gray-600 md:max-w-3xl">
                      Here you&apos;ll find information about getting started,
                      user login, my account, security, communication, settings
                      option, customization and user rating.
                    </p>
                    <ul>
                      {faqs
                        .filter((item) => item.category === value)
                        .map((item, index) => (
                          <li
                            key={index}
                            className="mb-5 font-light text-black md:max-w-3xl"
                          >
                            <strong>{item.question}</strong>
                            <p className="text-gray-500 mt-5">{item.answer}</p>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
      <div className="h-[2px] bg-gray-500 w-2/3 mx-auto opacity-20"></div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-0 w-2/3 mx-auto my-20">
        <h1 className="text-black text-xl">
          Didn&apos;t find an answer to your question?{" "}
        </h1>
        <Link to="/contact-us">
          <button className="px-10 py-5 border border-gray-300 text-[#ED0058] rounded-md bg-white hover:bg-[#ED0058] hover:text-white hover:border-[#ED0058] hover:shadow-xl duration-300 uppercase">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FaqQuestions;
