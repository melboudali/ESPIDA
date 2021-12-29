import { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import { validateEmail } from "../utils";

const useSubscribe = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      if (!validateEmail(email)) {
        throw new Error("invalid email");
      }

      const result = await addToMailchimp(email);
      if (result.result === "success") {
        setEmail("");
        setIsSuccess(true);
      } else {
        throw new Error(result.msg);
      }
    } catch (error) {
      setIsError(true);
      setErrorMsg((error as Error).message);
    }

    setLoading(false);
  };

  return {
    email,
    loading,
    isSuccess,
    isError,
    errorMsg,
    onChange,
    onSubmit,
  };
};

export default useSubscribe;
