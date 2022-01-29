import React from 'react';
import { TextInput, Checkbox, Button, MultiSelect } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import '../css/createFund.css'; 

export function CreateFund() {
    const form = useForm({
      initialValues: {
        email: '',
        termsOfService: false,
      },
  
      validationRules: {
        email: (value) => /^\S+@\S+$/.test(value),
      },
    });
  
    return (
      <form className='container' onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Campaign Title"
          placeholder="Your Campaign Title"
          {...form.getInputProps('Campaign Title')}
        />
        <TextInput
          required
          label="Campaign Deadline"
          input type="datetime-local"
          {...form.getInputProps('Campaign Deadline')}
        />
        <TextInput
          required
          label="Description"
          placeholder='Describe your campaign'
          {...form.getInputProps('Description')}
        />
        <TextInput
          required
          label="Goal to Achieve"
          placeholder='0.00000000 ETH'
          {...form.getInputProps('Goal to Achieve')}
        />
        <TextInput
          required
          label="Keywords"
          placeholder='Input keywords that represent your campaign'
          {...form.getInputProps('Keywords')}
          />
  
        <Button type="submit">Submit</Button>
      </form>
    );
  }

// export const CreateFund = () => {
//     return <div className="container">
//         <item className="item">Project Title</item>
//     </div>;
// };
