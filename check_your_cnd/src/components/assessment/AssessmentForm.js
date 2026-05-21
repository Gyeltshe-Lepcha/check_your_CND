"use client";

import { useState } from "react";
import { HeartIcon } from "@/components/icons/Icons";
import { activityOptions, assessmentSections, dietOptions } from "@/data/assessment";
import { FormSection } from "@/components/assessment/FormSection";
import { OptionGroup } from "@/components/assessment/OptionGroup";
import { RangeInput } from "@/components/assessment/RangeInput";
import { TextInput } from "@/components/assessment/TextInput";
import { clusterUser } from "@/lib/riskModel";

export function AssessmentForm({ onComplete }) {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState(71);
  const [height, setHeight] = useState(170);
  const [systolic, setSystolic] = useState("120");
  const [diastolic, setDiastolic] = useState("80");
  const [activityLevel, setActivityLevel] = useState("");
  const [dietType, setDietType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValue = (name, fallback) => {
      const value = formData.get(name);
      return value === null || value === "" ? fallback : value;
    };
    const result = clusterUser({
      age: fieldValue("age", age),
      weight: fieldValue("weight", weight),
      height: fieldValue("height", height),
      systolic: fieldValue("systolic", systolic),
      diastolic: fieldValue("diastolic", diastolic),
      activityLevel: fieldValue("activityLevel", activityLevel),
      dietType: fieldValue("dietType", dietType),
    });
    onComplete(result);
  };

  return (
    <form
      className="mx-auto mt-[40px] max-w-[960px] rounded-[22px] border border-[#dce6f2] bg-white px-9 py-[45px] shadow-[0_16px_32px_rgba(15,23,42,0.12)] max-sm:px-5"
      onSubmit={handleSubmit}
    >
      <div className="space-y-[45px]">
        <section>
          <FormSection {...assessmentSections[0]} />
          <div className="mt-[32px]">
            <TextInput
              label="Age"
              name="age"
              placeholder="Enter your age"
              type="number"
              min={1}
              max={120}
              required
              value={age}
              onChange={setAge}
            />
          </div>
        </section>

        <section>
          <FormSection {...assessmentSections[1]} />
          <div className="mt-[29px] space-y-[43px]">
            <RangeInput
              label="Weight (kg)"
              name="weight"
              min={30}
              max={200}
              value={weight}
              unit="kg"
              onChange={setWeight}
            />
            <RangeInput
              label="Height (cm)"
              name="height"
              min={100}
              max={250}
              value={height}
              unit="cm"
              onChange={setHeight}
            />
          </div>
        </section>

        <section>
          <FormSection {...assessmentSections[2]} />
          <div className="mt-[31px]">
            <h3 className="mb-[17px] text-[18px] font-semibold text-[#061633]">
              Blood Pressure (mmHg)
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <TextInput
                label="Systolic (upper)"
                name="systolic"
                placeholder="120"
                type="number"
                value={systolic}
                onChange={setSystolic}
              />
              <TextInput
                label="Diastolic (lower)"
                name="diastolic"
                placeholder="80"
                type="number"
                value={diastolic}
                onChange={setDiastolic}
              />
            </div>
          </div>
        </section>

        <section>
          <FormSection {...assessmentSections[3]} />
          <div className="mt-[33px] space-y-[43px]">
            <OptionGroup
              label="Physical Activity Level"
              name="activityLevel"
              options={activityOptions}
              value={activityLevel}
              onChange={setActivityLevel}
            />
            <OptionGroup
              label="Diet Type"
              name="dietType"
              options={dietOptions}
              value={dietType}
              onChange={setDietType}
            />
          </div>
        </section>
      </div>

      <button
        className="mt-[40px] flex h-[75px] w-full items-center justify-center gap-4 rounded-[18px] bg-blue-500 text-[24px] font-black text-white shadow-[0_12px_22px_rgba(59,130,246,0.24)] transition hover:bg-blue-600"
        type="submit"
      >
        <HeartIcon className="size-7" />
        <span>Check My Risk</span>
      </button>
    </form>
  );
}
