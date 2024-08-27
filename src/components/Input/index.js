const Input = ({ placeholder = "", className = "", textarea = false }) => {
  return (
    <>
      <div className="">
        {textarea ? (
          <textarea
            className={`${className} input resize-none peer py-3 px-0 text-body-04 max-md:text-body-05 md:min-w-[341px] max-md:w-full text-white outline-none focus:border-b-primary-brand duration-200 placeholder:duration-[200ms] font-normal block w-full bg-transparent border-t-transparent border-b-[1px] border-x-transparent border-b-white focus:border-t-transparent focus:border-x-transparent hover:placeholder:text-primary-brand disabled:opacity-50 disabled:pointer-events-none`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type="text"
            className={`${className} input peer py-3 px-0 text-body-04 max-md:text-body-05 md:min-w-[341px] max-md:w-full outline-none text-white focus:border-b-primary-brand duration-200 placeholder:duration-[200ms] font-normal block w-full bg-transparent border-t-transparent border-b-[1px] border-x-transparent border-b-white focus:border-t-transparent focus:border-x-transparent hover:placeholder:text-primary-brand disabled:opacity-50 disabled:pointer-events-none`}
            placeholder={placeholder}
          />
        )}
      </div>
    </>
  );
};

export default Input;
