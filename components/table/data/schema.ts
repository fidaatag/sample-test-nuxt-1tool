import { z } from 'zod';

// Define the schema for the "events" array inside the main object
const eventSchema = z.object({
  id: z.number(),
  e_tag: z.string().nullable(),
  caldav_id: z.string().nullable(),
  title: z.string(),
  location: z.string().nullable(),
  start_time: z.string(), // Assuming ISO string format
  end_time: z.string(), // Assuming ISO string format
  read_only: z.number(),
  description: z.string().nullable(),
  description_long: z.string().nullable(),
  calendar_categories_id: z.number(),
  calendar_type_id: z.number().nullable(),
  user_id: z.number(),
  is_all_day: z.number(),
  rrule: z.string().nullable(),
  contact_id: z.number().nullable(),
  opportunity_id: z.number().nullable(),
  creation_time: z.string(),
  reminder: z.string().nullable(),
  contact_reminder: z.string().nullable(),
  last_modified: z.string(),
  recurrence_id: z.number().nullable(),
  parent_id: z.number().nullable(),
  location_id: z.number().nullable(),
  price_per_participant: z.number().nullable(),
  max_participants: z.number().nullable(),
  responsible_id: z.number().nullable(),
  multiple: z.number(),
  min_participants: z.number(),
  is_overnight_stay_available: z.number(),
  deadline: z.string().nullable(),
  street: z.string().nullable(),
  city: z.string().nullable(),
  state: z.string().nullable(),
  country: z.number().nullable(),
  active: z.number(),
  requires_date_of_birth: z.number(),
  zip: z.string().nullable(),
  organizer: z.string().nullable(),
  extra_person: z.string().nullable(),
  participant_status: z.string().nullable(),
  signup_page_id: z.number().nullable(),
  cancel_mail: z.string().nullable(),
  confirm_mail: z.string().nullable(),
  view_id: z.number(),
  online_payment: z.number(),
  template_id: z.number().nullable(),
  online_registerlink: z.string().nullable(),
  register_startdate: z.string().nullable(),
  mail_confirmation_template: z.string().nullable(),
  mail_invoice_confirmation_template: z.string().nullable(),
  duration: z.string().nullable(),
  cancel_text: z.string().nullable(),
  confirm_text: z.string().nullable(),
  survey_id: z.number().nullable(),
  external: z.number(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  dataprivacy: z.string().nullable(),
  credits: z.number().nullable(),
  status: z.string().nullable(),
  project_id: z.number().nullable(),
  product_id: z.number().nullable(),
  product_category_id: z.number().nullable(),
  department_id: z.number().nullable(),
  task_id: z.number().nullable(),
  confirmed: z.number(),
  shift_event_id: z.number().nullable(),
  is_private: z.number(),
  is_low_priority: z.number(),
  meta_information: z.string().nullable(),
  laravel_through_key: z.number(),
  tax: z.number(),
  net_price_per_participant: z.number(),
});

// Define the main schema for the task, including the events array
export const taskSchema = z.object({
  id: z.number(),
  parent_id: z.number().nullable(),
  title: z.string(),
  subtitle: z.string().nullable(),
  contents: z.string().nullable(),
  goals: z.string().nullable(),
  target_group: z.string().nullable(),
  cost_information: z.string().nullable(),
  notes: z.string().nullable(),
  number: z.string(),
  is_overnight_stay_available: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  created_by: z.number(),
  updated_by: z.number(),
  max_number: z.number(),
  thumbnail_size_id: z.number().nullable(),
  event_row: z.string().nullable(),
  course_category_id: z.number().nullable(),
  teaser: z.string().nullable(),
  has_single_event: z.number(),
  calendar_type_id: z.number(),
  terms_and_conditions: z.string().nullable(),
  events: z.array(eventSchema), // Array of events
});

export type Task = z.infer<typeof taskSchema>;
