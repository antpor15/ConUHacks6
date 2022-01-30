/* eslint-disable no-restricted-globals */
import React from 'react';
import { TextInput, Checkbox, Button, MultiSelect, Textarea } from '@mantine/core';
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

    const handleSubmit = (values) => {
      console.log(values)
      alert("Please fill in the required areas")
    }

    //always use handlesubmit and parse vote options to have min 2 max 4.
  
    return (
      <form className='container' onSubmit={form.onSubmit((values) => {handleSubmit(values)})}>
        <TextInput
          required
          label="Campaign Title"
          placeholder="Your Campaign Title"

          {...form.getInputProps('campaignTitle')}
        />
        <TextInput
          required
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
        <TextInput
          required
          label="Keywords"
          placeholder='Input keywords that represent your campaign'
          {...form.getInputProps('keywords')}
          />
          <Textarea
          required
          label="Vote Options"
          placeholder='Input candidates here. (seperate each entry by a comma; eg:)'
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

