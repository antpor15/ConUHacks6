/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { TextInput, Checkbox, Button, MultiSelect, Textarea, Select } from '@mantine/core';
import { useForm, useHover } from '@mantine/hooks';
import '../css/createFund.css'; 

export function CreateFund() {
    const form = useForm({
      initialValues: {
        campaignTitle: "",
        campaignDeadline: "",
        description: "",
        goalAchieve: "",
        keywords: "",
        voteOptions: "",
      },
  
      validationRules: {
        email: (value) => /^\S+@\S+$/.test(value),
      },
    });

    const [keywords, setKeywords] = useState([]);

    const handleSubmit =(values) => {
      console.log(values)
      if (values.campaignTitle === '' || values.description === '' || values.goalAchieve === '' || values.keywords.length === [''] || values.voteOptions === '') {
        alert("Please fill in the required areas")
        return;
      }
      splitString(values.voteOptions)
    }

    function splitString (voteOptions) {
      const optionArray = voteOptions.split(",", 4)
      console.log(optionArray)
    }
    
    return (
      <form className='container' onSubmit={form.onSubmit((values) => {handleSubmit(values)})}>
        <TextInput
          required
          label="Campaign Title"
          placeholder="Your Campaign Title"

          {...form.getInputProps('campaignTitle')}
        />
        <TextInput
          label="Campaign Deadline"
          input type="datetime-local"
          {...form.getInputProps('campaignDeadline')}
        />
        <Textarea
          required
          label="Description"
          placeholder='Describe your campaign'
          {...form.getInputProps('description')}
        />
        <TextInput
          required
          label="Goal to Achieve"
          placeholder='0.00000000 ETH'
          {...form.getInputProps('goalAchieve')}
        />
        <Select
          required
          label="Keywords"
          data={keywords}
          placeholder='Input keywords that represent your campaign'
          creatable
          searchable
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => setKeywords((current) => [...current, query])}
          {...form.getInputProps('keywords')}
          />
          <Textarea
          required
          label="Vote Options"
          placeholder='Input candidates here. (seperate each entry by a comma.)'
          autosize
          minRows={2}
          maxRows={4}
          {...form.getInputProps('voteOptions')}
          />
  
        <Button
        className='box'sx={{
          backgroundColor: "black",
          opacity: 0.8,
          '&:hover': {
            backgroundColor: "black",
            color: "#FFE81F",
          },
        } 
        }type="submit">Submit</Button>
      </form>
    );
  }

