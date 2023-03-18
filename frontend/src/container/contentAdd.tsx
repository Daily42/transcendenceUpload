import React, { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import * as theme from "../theme/theme";
import DatePicker from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"

const Contents = styled("div", {
  backgroundColor: "#F0F0F0",
  height: `calc(${theme.NAV_LEFT_HEIGHT} - 50px)`,
  width: "70%",
  marginLeft: "15%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Update this to "center"
  justifyContent: "left",
  color: "white",
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
});

const TextArea = styled("textarea", {
  backgroundColor: "#F5F5F5",
  border: "none",
  borderRadius: "8px",
  color: "#333",
  minHeight: "200px",
  padding: "16px",
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
});

const WritePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    location: "",
    date: [],
  });
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [selectedOption2, setSelectedOption2] = useState("Option 1");
  const [showLocationInput, setShowLocationInput] = useState(false);

  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
  const options2 = Array.from({ length: 16 }, (_, i) => `Option ${i + 1}`);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOption2Change = (event) => {
    const { value } = event.target;
    setSelectedOption2(value);
    if (value === "Option 16") {
      setShowLocationInput(true);
    } else {
      setShowLocationInput(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData, selectedOption, selectedOption2);
  };

  return (
    <Container>
      <Card>
        <Heading>Write a New Post</Heading>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <TextArea
            name="content"
            placeholder="Write something..."
            value={formData.content}
            onChange={handleInputChange}
          />
          <DatePickerInput
            name="date"
            placeholder="Pick a date"
            format="DD/MM/YYYY"
            plugins={[<DatePanel />]}
            value={formData.date}
            onChange={(value) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                date: value,
              }))
            }
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
          {showLocationInput && (
              <Input
                type="text"
                name="location"
                placeholder="Location"
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
