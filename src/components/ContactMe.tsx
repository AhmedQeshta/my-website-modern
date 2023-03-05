import { useCallback, FC } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ApiPageInfosInterFace, ContactInputs } from '@/interfaces';
import { withGuard, TitleHeader } from '@/utils';

const ContactMe: FC<ApiPageInfosInterFace> = ({ pageinfos }) => {
  const { address, email, phoneNumber } = pageinfos[0] ?? {};
  const { register, handleSubmit, resetField } = useForm<ContactInputs>();

  const onSubmit: SubmitHandler<ContactInputs> = useCallback(
    (formData) => {
      window.location.href = `mailto:ahmed.qeshta.dev@gmail.com?subject=${formData.email}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email}))`;
      resetField('email');
      resetField('name');
      resetField('subject');
      resetField('message');
    },
    [resetField],
  );

  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row  max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center z-0">
      <TitleHeader title="Contact Me" />
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          I have got just what you need.
          <span className="underline decoration-[#F7AB0A]/50 px-2">lets Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5  md:h-7 md:w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5  md:h-7 md:w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-full px-10 md:px-0 mx-auto">
          <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-2">
            <input {...register('name')} className="contactInput" type="text" placeholder="Name" />
            <input
              {...register('email')}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register('subject')}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />
          <textarea {...register('message')} className="contactInput" placeholder="Message" />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default withGuard(ContactMe, 'pageinfos');
