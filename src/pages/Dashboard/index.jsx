import ProfessionalLogo from "@assets/svgs/profession.svg";
import UserImage from "@assets/svgs/user-img.svg";
import Button from "@components/Button";
import Checkbox from "@components/Checkbox";
import Input from "@components/Input";

const Alert = () => {
  return (
    <div className="alert alert-success">
      <img src={ProfessionalLogo} className="alert-icon" />
      <div>
        <h3 className="alert-heading text-white">Premium Account</h3>
        <p className="alert-text">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-lg">
      <Alert />
      <h3 className="heading-3 text-dark m-0 p-0">Personal Information</h3>
      <div className="flex items-start gap-md">
        <div className="flex-1 flex flex-col m-y-0">
          <div className="flex items-center gap-md">
            <Input id="firstName" name="firstName" label="First Name" />
            <Input name="lastName" id="lastName" label="Last Name" />
          </div>
          <div className="flex items-center gap-md">
            <Input id="city" name="city" label="City" />
            <Input name="postalCode" id="postalCode" label="Postal Code" />
          </div>
          <div className="flex items-center gap-md">
            <Input id="address" name="address" label="Address" />
          </div>
          <div className="flex items-center gap-md">
            <Input id="email" name="email" label="Email" />
            <Input id="phone" name="phone" label="Phone" type="tel" />
          </div>
          <div className="flex items-center gap-md">
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
            />
            <div className="form-group flex-grow flex">
              <input
                type="text"
                className="form-control p-x-sm"
                style={{ visibility: "hidden" }}
              />
            </div>
          </div>
          <div>
            <p className="font-light">
              Use this email to log in to your{" "}
              <span className="text-primary">resumedone.io</span> account and
              receive notifications.
            </p>
            <br />
            <Button>Save</Button>
            <br />
          </div>
          <div className="flex items-center gap-sm m-y-lg">
            <Checkbox />
            <p className="font-light p-0 m-0">
              Show my profile to serious employers on{" "}
              <span className="text-primary">hirethesbest.io</span> for free
            </p>
          </div>
        </div>
        <div>
          <img src={UserImage} className="dashboard-user-image" />
        </div>
      </div>
      <div className="deactivate-section p-lg flex flex-col gap-sm">
        <h4 className="text-dark font-bolder">Delete account</h4>
        <p>
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </p>
        <p className="text-danger font-bold">Yes, Delete my account</p>
      </div>
      <div>
        <p className="font-light m-0">
          <span className="text-primary">
            Get in touch with our support team{" "}
          </span>{" "}
          if you have any question or want to leave some feedback.
          <br />
          We’ll be happy to hear from you.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
