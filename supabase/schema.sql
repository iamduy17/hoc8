-- Chạy trong Supabase > SQL Editor (1 lần)
create table if not exists students (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  avatar text not null default '🐥',
  created_at timestamptz default now(),
  last_seen timestamptz default now()
);

create table if not exists attempts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references students(id) on delete cascade,
  subject text not null,
  lesson_id text not null,
  lesson_title text,
  mode text not null,            -- 'practice' | 'exam' | 'quick'
  level text,                    -- 'all' | '1'..'4'
  score int not null,
  total int not null,
  duration int default 0,        -- giây
  wrong_tags text[] default '{}',
  created_at timestamptz default now()
);

create table if not exists reminders (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references students(id) on delete cascade,
  message text not null,
  read boolean default false,
  created_at timestamptz default now()
);

create table if not exists assignments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references students(id) on delete cascade,
  subject text not null,
  lesson_id text not null,
  lesson_title text,
  level text default 'all',
  note text,
  due_date date,
  done boolean default false,
  done_at timestamptz,
  created_at timestamptz default now()
);

create index if not exists attempts_student_idx on attempts(student_id, created_at desc);

-- Mở quyền cho anon key (app dùng tên, không có đăng nhập Supabase).
alter table students enable row level security;
alter table attempts enable row level security;
alter table reminders enable row level security;
alter table assignments enable row level security;
create policy "anon all students"  on students  for all using (true) with check (true);
create policy "anon all attempts"  on attempts  for all using (true) with check (true);
create policy "anon all reminders" on reminders for all using (true) with check (true);
create policy "anon all assignments" on assignments for all using (true) with check (true);
