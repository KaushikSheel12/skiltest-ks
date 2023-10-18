import Image from "next/image";
import React from "react";
import { LiUlComponent } from "./LiUlComponent";

export const EligibilityForm = () => {
  const KYC = ["PAN card ", "Driving License ", "Aadhar Card"];
  const Address = [
    "Aadhar Card ",
    "Valid water/electricity/ LPG bill",
    "Voter’s ID card ",
    "Current House lease agreement ",
    "Valid passport ",
  ];

  const TheAcademic = [
    "10th Result",
    "12th Result",
    "Under Graduate Result Semester Wise (If required)",
    "Entrance Exam Result - Abroad institutes (GRE, GMAT, TOEFL, etc.)",
    "Entrance Exam Result- Domestic institutes (CAT, CET, GMAT, CMAT, JEE, NEET, GRE, etc.)",
    "Proof of Admission ",
  ];

  const CommonDocuments = [
    "Title deed & Sales Deed",
    "Registration receipt",
    "Allotment letter",
    "Chain deed of 30 years",
    "Tax copy or electricity bill",
    "Government-approved building plan",
    "OC and Completion Certificate (if the property is constructed)",
  ];

  const EligibleCourses = [
    "Medicine, Management & Engineering",
    "Agri Diploma",
    "Medical Veterinary Diploma",
    "Teacher Training Courses",
    "Nursing Courses",
    "Computer studies",
    "Data Entry Operator Course",
    "Diploma/Degree Courses In Areas Of Aeronautics, Shipping, Pilot Training.",
    "Vocational courses that are offered by a Government organization or department, State Skill Missions, State Skill Corporations etc.",
  ];

  return (
    <>
      <div className="w-full h-[200px] md:h-[350px] relative">
        <h1 className=" z-10 absolute text-white md:top-[130px] top-[80px] left-5 md:left-40 text-[20px] md:text-[36px] font-semibold tracking-[1px]">
          Education Loan Eligibility
        </h1>
        <p className=" z-10 absolute text-white md:top-[190px] md:left-40  top-[110px] left-5  text-[16px] md:text-[17px]  ">
          Check if you are eligible for student loan from UniCreds
        </p>
        <Image
          src="https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FEligibility%2Fdesktop-banner.png&w=2048&q=75"
          alt="banner"
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      <div className="md:w-[70%] w-full  px-4 md:px-2 py-2  h-full mx-auto ">
        <h1 className="text-[18px] font-bold tracking-[1px] ">
          Education Loan Eligibility
        </h1>
        <p className="py-2 text-[17px] leading-6 text-gray-600 ">
          Calculate the eligibility for your student loan with this basic
          calculator. It will assist you in calculating the amount for which you
          are eligible. You will have your loan application rejected if you
          apply for an amount greater than you are eligible for. Your valuable
          time and money will be lost, plus you will have no idea of the exact
          sum you should apply for.
        </p>
        <h1 className="text-[18px] font-bold tracking-[1px] ">
          Documents Required For Education Loans
        </h1>
        <p className="py-1 text-[17px] leading-6 font-bold ">
          Identity-Related Documents Required From Both Applicant And
          Co-Applicant
        </p>

        <LiUlComponent heading="KYC Documents:" items={KYC} />
        <LiUlComponent heading="Address Proof:" items={Address} />
        <LiUlComponent
          heading="Documents Related To The Academic Record Of The Applicant:"
          items={TheAcademic}
        />
        <p className="text-[18px] font-bold tracking-[1px] ">
          Collateral Related Documents
        </p>

        <LiUlComponent heading="Common Documents:" items={CommonDocuments} />
        <h1 className="text-[18px] font-bold tracking-[1px] mt-3 ">
          Eligible Courses For Education Loans
        </h1>
        <p className="py-2 text-[17px] leading-6 text-gray-600 ">
          Typically, the educational loan is available for all courses offered
          by various institutes that are recognized by the respective governing
          bodies. These loans are available for various undergraduate programs,
          postgraduate programs & doctoral programs and also for special diploma
          courses. These loans are also accessible for specialized courses &
          training depending on each lender’s policies. Thus it is possible that
          one lender may offer a loan for one course while another may not. The
          general list below gives the names of few courses for which loans are
          available:
        </p>

        <LiUlComponent
          heading=""
          items={EligibleCourses}
        />
      </div>
    </>
  );
};
