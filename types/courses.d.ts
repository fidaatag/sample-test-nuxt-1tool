export interface Link {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Links {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    links: Link[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

export interface Courses_Detail_Id {
    id: number;
    parent_id: number;
    title: string;
    subtitle: string;
    contents: string;
    goals: string;
    target_group: string;
    cost_information: string;
    notes: string;
    number: string;
    is_overnight_stay_available: number;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
    max_number: number;
    thumbnail_size_id: number;
    event_row: string;
    course_category_id: number;
    teaser: string;
    has_single_event: number;
    calendar_type_id: number;
    terms_and_conditions: string;
}

export interface Courses_Id {
    data : Courses_Detail_Id;
}

export interface Calendar_Event_Detail {
    id: number;
    e_tag: string | null;
    caldav_id: string | null;
    title: string;
    location: string;
    start_time: string;
    end_time: string;
    read_only: number;
    description: string;
    description_long: string;
    calendar_categories_id: number;
    calendar_type_id: number | null;
    user_id: number;
    is_all_day: number;
    rrule: string | null;
    contact_id: number | null;
    opportunity_id: number | null;
    creation_time: string;
    reminder: string | null;
    contact_reminder: string | null;
    last_modified: string;
    recurrence_id: number | null;
    parent_id: number | null;
    location_id: number | null;
    price_per_participant: number | null;
    max_participants: number | null;
    responsible_id: number | null;
    multiple: number;
    min_participants: number;
    is_overnight_stay_available: number;
    deadline: string | null;
    street: string | null;
    city: string | null;
    state: string | null;
    country: number | null;
    active: number;
    requires_date_of_birth: number;
    zip: string | null;
    organizer: string;
    extra_person: string | null;
    participant_status: string | null;
    signup_page_id: number | null;
    cancel_mail: string | null;
    confirm_mail: string | null;
    view_id: number;
    online_payment: number;
    template_id: number | null;
    online_registerlink: string | null;
    register_startdate: string | null;
    mail_confirmation_template: string | null;
    mail_invoice_confirmation_template: string | null;
    duration: string | null;
    cancel_text: string | null;
    confirm_text: string | null;
    survey_id: number | null;
    external: number;
    latitude: number | null;
    longitude: number | null;
    dataprivacy: string | null;
    credits: number | null;
    status: string | null;
    project_id: number | null;
    product_id: number | null;
    product_category_id: number | null;
    department_id: number | null;
    task_id: number | null;
    confirmed: number;
    shift_event_id: number | null;
    is_private: number;
    is_low_priority: number;
    meta_information: string | null;
    laravel_through_key: number;
    tax: number;
    net_price_per_participant: number;
}

export interface Course_Detail_Include_Event {
    id: number;
    parent_id: number | null;
    title: string;
    subtitle: string | null;
    contents: string | null;
    goals: string | null;
    target_group: string | null;
    cost_information: string | null;
    notes: string | null;
    number: string;
    is_overnight_stay_available: number;
    created_at: string;
    updated_at: string;
    created_by: number;
    updated_by: number;
    max_number: number;
    thumbnail_size_id: number | null;
    event_row: string | null;
    course_category_id: number | null;
    teaser: string | null;
    has_single_event: number;
    calendar_type_id: number | null;
    terms_and_conditions: string | null;
    events: Calendar_Event_Detail[];
}

export interface Couses_Include_Event {
    data : Course_Detail_Include_Event[];
    links: Links;
    meta: Meta;
}

export interface Calendar_Event_Id {
    data: Calendar_Event_Detail;
}

export interface Courses {
    data: Courses_Detail_Id[];
    links: Links;
    meta: Meta;
}


