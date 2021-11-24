import { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

const useSubscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const result = await addToMailchimp(email);

    const onSuccess = () => {
      setEmail("");
      setIsSuccess(true);
    };

    result.result === "success" ? onSuccess() : setIsError(true);

    setLoading(false);
  };

  return {
    email,
    loading,
    isSuccess,
    isError,
    onChange,
    onSubmit,
  };
};

export default useSubscribe;
