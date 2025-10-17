import React from "react";
import { AssessmentTypeSection } from "./sections/AssessmentTypeSection";
import { FieldOfPracticeSection } from "./sections/FieldOfPracticeSection";
import { FilterSection } from "./sections/FilterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OtherOptionsSection } from "./sections/OtherOptionsSection";
import { SidebarSection } from "./sections/SidebarSection";
import { SortOptionsSection } from "./sections/SortOptionsSection";
import { SpecialitySection } from "./sections/SpecialitySection";
import { SummarySection } from "./sections/SummarySection";

export const FrameScreen = () => {
  return (
    <div
      className="flex flex-col w-[393px] items-start relative"
      data-model-id="1802:1684"
    >
      <MainContentSection />
      <SidebarSection />
      <SortOptionsSection />
      <FilterSection />
      <SummarySection />
      <FieldOfPracticeSection />
      <SpecialitySection />
      <AssessmentTypeSection />
      <OtherOptionsSection />
    </div>
  );
};
