import React from "react";
import Container from "../shared/Container";

const CheckoutPartner = () => {
  return (
    <div className="py-8 md:py-24 rounded-lg w-11/12 mx-auto bg-slate-100 px-3">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-end gap-2">
          <div>
            <label class="label">
              <span class="text-lg text-[#656565]">I am</span>
            </label>
            <select
              className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[17px] pr-[18px] text-[20px]"
              class="select w-full max-w-xs"
            >
              <option className="text-[20px]" selected>
                Men
              </option>
              <option className="text-[20px]">Women</option>
              <option className="text-[20px]">Non-Binary</option>
            </select>
          </div>
          <div>
            <label class="label">
              <span class="text-lg text-[#656565]">Looking for</span>
            </label>
            <select
              className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[17px] pr-[18px] text-[20px]"
              class="select w-full max-w-xs"
            >
              <option className="text-[20px]" selected>
                Men
              </option>
              <option className="text-[20px]">Women</option>
              <option className="text-[20px]">Non-Binary</option>
            </select>
          </div>
          <div>
            <label class="label">
              <span class="text-lg text-[#656565]">Age</span>
            </label>
            <div className="flex justify-center items-center">
              <select
                className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[17px] pr-[12px] text-[20px]"
                class="select w-full max-w-xs"
              >
                <option className="text-[20px]" selected>
                  18
                </option>
                <option className="text-[20px]">19</option>
                <option className="text-[20px]">20</option>
                <option className="text-[20px]">21</option>
                <option className="text-[20px]">22</option>
                <option className="text-[20px]">23</option>
              </select>
              <div className="text-4xl text-[#656565]">-</div>
              <select
                className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[17px] pr-[12px] text-[20px]"
                class="select w-full max-w-xs"
              >
                <option className="text-[20px]" selected>
                  30
                </option>
                <option className="text-[20px]">31</option>
                <option className="text-[20px]">32</option>
                <option className="text-[20px]">33</option>
                <option className="text-[20px]">34</option>
              </select>
            </div>
          </div>
          <div>
            <label class="label">
              <span class="text-lg text-[#656565]">Country</span>
            </label>
            <select
              className="bg-[#FAFAFA] border-[1px] border-solid border-[#FAFAFA] py-[17px] pr-[18px] text-[20px]"
              class="select w-full max-w-xs"
            >
              <option className="text-[20px] hidden" disabled selected>
                Choose your country
              </option>
              <option className="text-[20px]">USA</option>
              <option className="text-[20px]">Canada</option>
              <option className="text-[20px]">UK</option>
              <option className="text-[20px]">Ireland</option>
              <option className="text-[20px]">France</option>
            </select>
          </div>
          <button className="text-lg py-4 rounded text-white bg-[#ED0058] hover:bg-[#a33f64]">
            Find your partner
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutPartner;
