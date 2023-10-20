export const timelineData = [
  {
    date: '2023-10-20T09:00:00', // Use a specific date and time for the event
    time: '09:00 AM',
    title: 'Talk',
    description:
      'To mark an event as "passed" based on the current time, you can compare the events date with the current time and set the passed property accordingly',
    speakers: 'Paul Lion, John Doe',
    passed: new Date() > new Date('2023-10-20T03:00:00'),
  },
  {
    date: '2023-10-23T14:30:00', // Use a specific date and time for the event
    time: '09:00 AM',
    title: 'Talk',
    description: 'Milestone 1',
    speakers: 'Paul Lion',
    passed: new Date() > new Date('2023-10-23T14:30:00'),
  },
  {
    date: '2023-10-25T16:00:00', // Use a specific date and time for the event
    time: '09:00 AM',
    title: 'Talk',
    description: 'Milestone 2',
    speakers: 'Paul Lion',
    passed: new Date() > new Date('2023-10-25T16:00:00'),
  },
  {
    date: '2023-10-27T10:45:00', // Use a specific date and time for the event
    time: '09:00 AM',
    title: 'Talk',
    description: 'Milestone 3',
    speakers: 'Paul Lion',
    passed: new Date() > new Date('2023-10-27T10:45:00'),
  },
  // Add more milestones as needed
];
