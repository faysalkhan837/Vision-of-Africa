import captchaImg from "/captcha.png";

const ContuctUs = () => {
  return (
    <div>
      <div className="w-full md:h-52"></div>
      <div className="md:flex justify-between gap-5">
        <div className="bg-[#f5f5f5] max-w-1/2 p-14">
          <img
            src="https://vs-africa.org/wp-content/uploads/2024/04/beautiful-smiley-woman-talking-phone-768x1152.jpg"
            className="w-full rounded-md"
          />
        </div>

        <div className="bg-[#f5f5f5] p-14 leading-10 ">
          <h1 className="font-semibold text-[40px] text-[#016C36]">
            Get in touch for <br /> a collaborative <br /> discussion <br /> and
            partnerships
          </h1>
          <hr className="h-0.5 border-[#016C36] mt-4" />
          <form className="mt-10 space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="input border-[#016C36] w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="E-mail"
              className="input border-[#016C36] w-full max-w-xs"
            />
            <textarea
              className="textarea border-[#016C36] w-full max-w-xs"
              placeholder="Message"
            ></textarea>
            <div className="leading-7">
              <input
                className=""
                type="checkbox"
                id="agriment"
                name="agriment"
              />
              <label htmlFor="agriment">
                I accept that VSA will process my personal <br /> data for the
                purpose of handling my request.
              </label>
            </div>
            {/* capcha box */}
            <div className=" max-w-60 flex justify-between rounded-md shadow-xl">
              <div className="bg-[#1a73e8] leading-5 text-white text-sm px-3 rounded-l-md">
                <h4>protected by reCAPTCHA</h4>
                <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
                <span>-</span>
                <a href="https://policies.google.com/terms?hl=en">Terms</a>
              </div>
              <img src={captchaImg} className="rounded-r-md" />
            </div>
            <input
              className="btn w-full bg-[#016C36] text-white max-w-xs hover:border-[#016C36] hover:border-4 hover:text-[#016C36]"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContuctUs;
