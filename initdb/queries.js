const queries = [
  // CREATE USERS TABLE
  `
  CREATE TABLE IF NOT EXISTS public.groups
  (
      id integer NOT NULL,
      group_name character varying(64) COLLATE pg_catalog."default" NOT NULL,
      CONSTRAINT groups_pkey PRIMARY KEY (id)
  );
    `,
  // CREATE USERS TABLE
  `
  CREATE TABLE IF NOT EXISTS public.users
(
    id character varying(64) COLLATE pg_catalog."default" NOT NULL,
    login character varying(32) COLLATE pg_catalog."default" NOT NULL,
    password character varying(32) COLLATE pg_catalog."default" NOT NULL,
    email character varying(64) COLLATE pg_catalog."default" NOT NULL,
    full_name character varying(64) COLLATE pg_catalog."default",
    adress character varying(64) COLLATE pg_catalog."default",
    tel character varying(11) COLLATE pg_catalog."default",
    group_id integer NOT NULL,
    date_of_birthday character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT group_id_of_users_fkey FOREIGN KEY (group_id)
        REFERENCES public.groups (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;
  `,
  `
  CREATE TABLE IF NOT EXISTS public.teachers
  (
      id integer NOT NULL,
      fullname character varying(64) COLLATE pg_catalog."default" NOT NULL,
      tel character varying(11) COLLATE pg_catalog."default" NOT NULL,
      qualification character varying(32) COLLATE pg_catalog."default" NOT NULL,
      work_experience integer NOT NULL,
      CONSTRAINT teachers_pkey PRIMARY KEY (id)
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS public.subjects
  (
    id integer NOT NULL,
    subject_name character varying(64) COLLATE pg_catalog."default" NOT NULL,
    teacher_id integer NOT NULL,
    CONSTRAINT subjects_pkey PRIMARY KEY (id),
    CONSTRAINT teacher_id_of_subjects_fkey FOREIGN KEY (teacher_id)
        REFERENCES public.teachers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS public.grades
  (
      id integer NOT NULL,
      subject_id integer NOT NULL,
      current_grade integer,
      max_grade integer NOT NULL,
      user_id character varying(64) COLLATE pg_catalog."default" NOT NULL,
      CONSTRAINT grades_pkey PRIMARY KEY (id),
      CONSTRAINT subject_id_of_grades_fkey FOREIGN KEY (subject_id)
          REFERENCES public.subjects (id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE NO ACTION,
      CONSTRAINT user_id_of_grades_fkey FOREIGN KEY (user_id)
          REFERENCES public.users (id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE NO ACTION
          NOT VALID
  );
  `,
  `
  CREATE TABLE IF NOT EXISTS public.schedule
  (
    id integer NOT NULL,
    group_id integer NOT NULL,
    subject_id integer NOT NULL,
    hours_count integer NOT NULL,
    CONSTRAINT schedule_pkey PRIMARY KEY (id),
    CONSTRAINT group_id_of_schedule_fkey FOREIGN KEY (group_id)
        REFERENCES public.groups (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT subject_id_of_schedule_fkey FOREIGN KEY (subject_id)
        REFERENCES public.subjects (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
  )
  `,

  `
  CREATE TABLE IF NOT EXISTS public.sections
(
    id integer NOT NULL,
    section_name character varying(32) COLLATE pg_catalog."default" NOT NULL,
    teacher_id integer NOT NULL,
    section_description text COLLATE pg_catalog."default",
    CONSTRAINT sections_pkey PRIMARY KEY (id),
    CONSTRAINT sections_fkey_teacher_id FOREIGN KEY (teacher_id)
        REFERENCES public.teachers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.sections
    OWNER to postgres;
  `,

  `
  CREATE TABLE IF NOT EXISTS public.sections_members
(
    id integer NOT NULL,
    section_id integer NOT NULL,
    user_id character varying(64) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT sections_members_pkey PRIMARY KEY (id),
    CONSTRAINT sections_members_fkey_section_id FOREIGN KEY (section_id)
        REFERENCES public.sections (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT sections_members_fkey_user_id FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.sections_members
    OWNER to postgres;
  `,
];

module.exports = queries;
