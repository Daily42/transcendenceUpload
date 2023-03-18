import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import * as theme from "../theme/theme";
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"
import TimePicker from "react-multi-date-picker/plugins/time_picker"
import "react-multi-date-picker/styles/layouts/mobile.css"

const Contents = styled("div", {
  backgroundColor: "#F0F0F0",
  height: `calc(${theme.NAV_LEFT_HEIGHT} - 50px)`,
  width: "70%",
  marginLeft: "15%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#333",
  padding: "3vh",
  overflowX: "hidden",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    background: "none",
    width: "0.6rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#BDBDBD",
    width: "0.4rem",
    right: "60px",
  },
});

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#F0F0F0",
  height: "100vh",
});

const Card = styled("div", {
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.08)",
  maxWidth: "600px",
  padding: "32px",
  width: "100%",
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const Input = styled("input", {
  backgroundColor: "#F5F5F5",
  border: "none",
  borderRadius: "8px",
  color: "#333",
  padding: "16px",
  fontSize: "16px",
});

const TextArea = styled("textarea", {
  backgroundColor: "#F5F5F5",
  border: "none",
  borderRadius: "8px",
  color: "#333",
  minHeight: "200px",
  padding: "16px",
  fontSize: "16px",
});

const SubmitButton = styled("button", {
  backgroundColor: "#0070F3",
  border: "none",
  borderRadius: "8px",
  color: "#fff",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  padding: "16px",
  transition: "background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#0060D6",
  },
});

const DatePickerInput = styled(DatePicker, {
  backgroundColor: "#F5F5F5",
  border: "none",
  borderRadius: "8px",
  color: "#333",
  padding: "16px",
  fontSize: "16px",
});

const Heading = styled("h1", {
  color: "#333",
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "16px",
  textAlign: "center",
});

const Dropdown = styled("select", {
  backgroundColor: "#F5F5F5",
  border: "none",
  borderRadius: "8px",
  color: "#333",
  padding: "16px",
  fontSize: "16px",
});

const CheckboxLabel = styled("label", {
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  cursor: "pointer",
  marginBottom: "16px",
});

const CheckboxInput = styled("input", {
  marginRight: "8px",
  cursor: "pointer",
});

const CheckboxText = styled("span", {
  fontSize: "16px",
  marginLeft: "8px",
});

const WritePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    location: "",
    term: "",
    date: [],
  });

  const [isRange, setIsRange] = useState(false);
  const [selectedOption, setSelectedOption] = useState("42seoul_official");
  const [selectedOption2, setSelectedOption2] = useState("개포 클러스터");
  const [showLocationInputgaepo, setshowLocationInputgaepo] = useState(true);

  useEffect(() => {
    let selectedDate;
    if (formData.date[formData.date.length - 1]) {
      const { year, month, day, hour, minute, } = formData.date[formData.date.length - 1];
      const date = new Date(year, month - 1, day, hour, minute);
      selectedDate = date.toISOString();
    } else {
      selectedDate = null;
    }
    console.log('02 : ', selectedDate);
  }, [formData.date]);

  const options = [
    "42seoul_official",
    "study group",
    "club(동아리)",
    "hackerthon & conference",
    "etc"
  ];
  const options2 = [
    "개포 클러스터",
    "서초 클러스터",
    "기타",
    "개포 클러스터 - 2층 Cluster 01",
    "개포 클러스터 - 2층 Cluster 02",
    "개포 클러스터 - 4층 Cluster 03",
    "개포 클러스터 - 4층 Cluster 04",
    "개포 클러스터 - 5층 Cluster 05",
    "개포 클러스터 - 5층 Cluster 06",
    "서초 클러스터 - 4층 Cluster 07",
    "서초 클러스터 - 4층 Cluster 08",
    "서초 클러스터 - 5층 Cluster 09",
    "서초 클러스터 - 5층 Cluster 10",
    "개포 클러스터 - 3층 ClusterX 01",
    "개포 클러스터 - 3층 ClusterX 02",
    "개포 클러스터 - 1층 오픈클러스터",
    "개포 클러스터 - 1층 게임장",
    "개포 클러스터 - 1층 42Lab",
  ];

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChange2 = (event: any) => {
    const { name, value } = event.target;
    const onlyNumber = value.replace(/[^0-9]/g, '')
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: onlyNumber,
    }));
  };

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleOption2Change = (event: any) => {
    const { value } = event.target;
    setSelectedOption2(value);
    if (value === "기타" || value === "개포 클러스터" || value === "서초 클러스터") {
      setshowLocationInputgaepo(true);
    } else {
      setshowLocationInputgaepo(false);
      formData.location = '';
    }
  };

  const handleCheckboxChange = () => {
    setIsRange(!isRange);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData, selectedOption, selectedOption2);
  };

  return (
    <Container>
      <Card>
        <Heading>새로운 글 작성</Heading>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="제목"
            value={formData.title}
            onChange={handleInputChange}
          />
          <TextArea
            name="content"
            placeholder="글 작성"
            value={formData.content}
            onChange={handleInputChange}
          />
          <DatePickerInput
            style={{
              width: "100%",
              boxSizing: "border-box",
              height: "26px"
            }}
            containerStyle={{
              width: "100%"
            }}
            className="rmdp-mobile"
            multiple={!isRange}
            range={isRange}
            name="date"
            placeholder="시작날짜 및 시각"
            format="MM/DD/YYYY"
            plugins={[
              <TimePicker position="bottom" />,
              <DatePanel markFocused />
            ]}
            value={formData.date}
            onChange={(value) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                date: value,
              }))
            }
          />
          <CheckboxLabel>
            <CheckboxInput type="checkbox" onChange={handleCheckboxChange} />
            <CheckboxText>Range mode</CheckboxText>
          </CheckboxLabel>
          <Input
            type="term"
            name="term"
            placeholder="기간(분)"
            value={formData.term}
            onChange={handleInputChange2}
          />
          <Dropdown value={selectedOption} onChange={handleOptionChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Dropdown>
          <Dropdown value={selectedOption2} onChange={handleOption2Change}>
            {options2.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Dropdown>
          {showLocationInputgaepo && (
            <Input
              type="text"
              name="location"
              placeholder="장소"
              value={formData.location}
              onChange={handleInputChange}
            />
          )}
          <SubmitButton type="submit">Post</SubmitButton>
        </Form>
      </Card>
    </Container>
  );
};

export default WritePost;

export function ContainerContents() {
  return (
    <Contents className="contents">
      <div>
        <WritePost />
      </div>
    </Contents>
  );
}
