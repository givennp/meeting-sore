const Input = ({ placeholder = "", className = "", textarea = false }) => {
  return (
    <>
      <div className="">
        {textarea ? (
          <textarea
            className={`${className} resize-none peer py-3 px-0 text-body-04 min-w-[341px] outline-none focus:border-b-primary-brand duration-200 placeholder:duration-[200ms] font-normal block w-full bg-transparent border-t-transparent border-b-[1px] border-x-transparent border-b-black focus:border-t-transparent focus:border-x-transparent hover:placeholder:text-black disabled:opacity-50 disabled:pointer-events-none`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type="text"
            className={`${className} peer py-3 px-0 text-body-04 min-w-[341px] outline-none focus:border-b-primary-brand duration-200 placeholder:duration-[200ms] font-normal block w-full bg-transparent border-t-transparent border-b-[1px] border-x-transparent border-b-black focus:border-t-transparent focus:border-x-transparent hover:placeholder:text-black disabled:opacity-50 disabled:pointer-events-none`}
            placeholder={placeholder}
          />
        )}
      </div>
    </>
  );
};

export default Input;
