import FormContainer from "@/components/form/FormContainer";
import { updateProfileAction, fetchProfile } from "@/utils/actions";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";

const ProfilePage = async () => {
  const profile = await fetchProfile();

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">user profile</h1>
      <div className="border p-8 rounded-md">
        {/* image input container */}

        <FormContainer action={updateProfileAction}>
          <div className="grid gap-4 md:grid-cols-2 mt-4 ">
            <FormInput
              type="text"
              name="firstName"
              label="Voornaam"
              defaultValue={profile.firstName}
            />
            <FormInput
              type="text"
              name="lastName"
              label="Naam"
              defaultValue={profile.lastName}
            />
            <FormInput
              type="text"
              name="username"
              label="Gebruikersnaam"
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text="Update profiel" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};
export default ProfilePage;
