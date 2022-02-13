import React, { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import {
  Button,
  Box,
  Input,
  Textarea,
  InputGroup,
  InputLeftAddon,
  Heading,
} from "@chakra-ui/react";
import Layout from "components/layouts/Article";
import { Select } from "@chakra-ui/react";
import { toast } from "react-toastify";

import "react-datepicker/dist/react-datepicker.css";

const Editor = dynamic(import("components/Editor"), {
  ssr: false,
  loading: () => <span>Loading...</span>,
});

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { FormInputWrap } from "components/admin/styled";
import FilePreview from "components/editor/FilePreview";

interface IValue {
  jobTitle: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  content: string;
}

const SelectBar = ({ t, setValue }) => (
  <Select
    placeholder="Select project option"
    onChange={(e) => setValue("jobTitle", e.target.value)}
  >
    <option value="project">{t("Work.working")}</option>
    <option value="toy">{t("Work.toy")}</option>
  </Select>
);

const New: NextPage = () => {
  const { t } = useTranslation("common");

  const { register, handleSubmit, setValue, getValues } = useForm<any>({
    defaultValues: {},
  });

  const [startDate, setStartDate] = useState<Date>(null);
  const [endDate, setEndDate] = useState<Date>(null);
  const [file, setFile] = useState<File>(null);

  useEffect(() => {
    register("title");
    register("content");
    register("engContent");
    register("startDate");
    register("endDate");
  }, [register]);

  // 컨텐츠 변경이벤트
  const handleContent = useCallback(
    (value, name) => {
      setValue(name, value);
    },
    [register]
  );

  const handleDateChange = (dateType, setDate) => (date) => {
    setValue(dateType, date);
    setDate(date);
  };

  const _handleSubmit = async (value) => {
    const {
      jobTitle,
      title,
      content,
      startDate,
      endDate,
      description,
    }: IValue = value;

    if (!jobTitle) {
      console.log(2);
      toast.error("잡 타이틀을 선택하세요.");
      return toast.error("잡 타이틀을 선택하세요.");
    }
    if (!startDate) {
      console.log(3);
      return toast.error("시작일을 선택하세요.");
    }
    if (!endDate) {
      console.log(4);
      return toast.error("종료일을 선택하세요.");
    }
    if (!content) {
      console.log(1);
      return toast.error("내용을 입력하세요.");
    }
    if (!file) {
      console.log(5);
      return toast.error("사진을 선택해 주세요");
    }
  };

  return (
    <Layout title="New Post">
      <form onSubmit={handleSubmit(_handleSubmit)}>
        <FormInputWrap>
          <Box mt={30} mb={2} gap={3}>
            <SelectBar t={t} setValue={setValue} />

            <div>
              <InputGroup>
                <InputLeftAddon pointerEvents="none" children="Start" />
                <DatePicker
                  className="date-picker"
                  showYearDropdown
                  selected={startDate}
                  onChange={handleDateChange("startDate", setStartDate)}
                />
              </InputGroup>
            </div>
            <div>
              <InputGroup>
                <InputLeftAddon pointerEvents="none" children="End" />
                <DatePicker
                  className="date-picker"
                  showYearDropdown
                  selected={endDate}
                  onChange={handleDateChange("endDate", setEndDate)}
                />
              </InputGroup>
            </div>
          </Box>
          <div>
            <div>
              <Input
                {...register("title", {
                  required: true,
                })}
                id="title"
                name="title"
                placeholder="Title"
                size="md"
              />
              <Textarea
                {...register("description", {
                  required: true,
                })}
                placeholder="Description"
              />
            </div>
            <div>
              <Input
                {...register("engTitle", {
                  required: true,
                })}
                id="engTitle"
                name="engTitle"
                placeholder="English Title"
                size="md"
              />
              <Textarea
                {...register("engDescription", {
                  required: true,
                })}
                placeholder="English Description"
              />
            </div>
          </div>
        </FormInputWrap>
        <Box>
          <Editor onChange={(value) => handleContent(value, "content")} />
        </Box>
        <Box>
          <Editor onChange={(value) => handleContent(value, "engContent")} />
        </Box>
        <Box>
          <div>
            <FilePreview setFile={setFile} />
          </div>
        </Box>
        <Button type="submit">+</Button>
      </form>
    </Layout>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: { locale, ...(await serverSideTranslations(locale, ["common"])) },
  };
};

export default New;
