import { Button } from "@/components/Button";
import { CustomLink } from "@/components/CustomLink";
import { Icon } from "@/components/Icon";
import { Modal } from "@/components/Modal";
import { ExternalLinks } from "@/utils/constants";
import React from "react";

export const HeroCta = () => {
  const popoverTarget = "hero-menu";
  const emailSubject = "Interested in collaborating with you.";
  const emailBody =
    "Hello Arjun,\n\nI hope this message finds you well.\nI came across your work and am truly impressed. I would love to discuss some opportunities with you. Please let me know a convenient time to connect.\n\nBest regards,\n[Your Name]";
  const emailHref = `${ExternalLinks.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <>
      <Button popoverTarget={popoverTarget} variant="primary">
        SUMMON THE KNIGHT
      </Button>
      <Modal className="w-[40rem]" id={popoverTarget}>
        <div className="w-full px-6 pb-6 md:px-16 md:pb-16 md:pt-4 flex flex-col justify-start items-center">
          <p className="text-2xl md:text-4xl text-left font-medium gap-2 mr-auto flex justify-start items-center">
            Light the Bat Signal
            <Icon
              icon="fill/bat"
              size=""
              className="hidden xs:block size-12 md:size-16 mb-[1px]"
            />
          </p>
          <small className="text-sm md:text-base text-balance text-gray-400 text-left">
            Choose your preferred way to connect. You can reach me via email or
            schedule a call to discuss opportunities, collaborations, or just to
            say hi.
          </small>
          <CustomLink
            variant="primary"
            className="no-underline w-full text-center mt-8 text-sm md:text-base"
            href={emailHref}
          >
            SEND AN EMAIL
          </CustomLink>
          <span className="text-gray-400 text-xs md:text-sm my-4">OR</span>
          <CustomLink
            variant="primary"
            className="no-underline w-full text-center text-sm md:text-base"
            href={ExternalLinks.meeting}
            target="_blank"
          >
            SCHEDULE A CALL
          </CustomLink>
        </div>
      </Modal>
    </>
  );
};
