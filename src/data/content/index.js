import { TOC } from './toc'
import { toanLessons } from './toan'
import { toanC1b345 } from './toan-c1-b345'
import { toanC2 } from './toan-c2'
import { toanC3 } from './toan-c3'
import { toanC45 } from './toan-c45'
import { vanB12 } from './van-b12'
import { toanC6 } from './toan-c6'
import { toanC7 } from './toan-c7'
import { vanB3 } from './van-b3'
import { toanC810 } from './toan-c8-10'
import { toanC9 } from './toan-c9'
import { vanB45 } from './van-b45'
import { vanB6 } from './van-b6'
import { vanB7 } from './van-b7'
import { vanB8 } from './van-b8'
import { vanB910 } from './van-b910'
import { anhU16 } from './anh-u1-6'
import { anhU712 } from './anh-u7-12'
import { khtnC1 } from './khtn-c1'
import { khtnC2 } from './khtn-c2'
import { khtnC34 } from './khtn-c34'
import { khtnC5 } from './khtn-c5'
import { khtnC6 } from './khtn-c6'
import { khtnC7a } from './khtn-c7a'
import { khtnC7b } from './khtn-c7b'
import { khtnC8 } from './khtn-c8'
import { suB14 } from './su-b1-4'
import { suB512 } from './su-b5-12'
import { suB1319 } from './su-b13-19'
import { diaB13 } from './dia-b1-3'
import { diaB48 } from './dia-b4-8'
import { diaB912CD } from './dia-b9-12-cd'
import { cnC1 } from './cn-c1'
import { cnC2 } from './cn-c2'
import { cnC34 } from './cn-c34'
import { gdcdAll } from './gdcd'
import { hdtnAll } from './hdtn'
import { th17 } from './th-1-7'
import { th811 } from './th-8-11'
import { th1216 } from './th-12-16'

// Thêm bài mới: tạo file export object { [lessonId]: lesson } rồi spread vào đây.
const LESSONS = { ...toanLessons, ...toanC1b345, ...toanC2, ...toanC3, ...toanC45, ...vanB12, ...toanC6, ...toanC7, ...vanB3, ...toanC810, ...toanC9, ...vanB45, ...vanB6, ...vanB7, ...vanB8, ...vanB910, ...anhU16, ...anhU712, ...khtnC1, ...khtnC2, ...khtnC34, ...khtnC5, ...khtnC6, ...khtnC7a, ...khtnC7b, ...khtnC8, ...suB14, ...suB512, ...suB1319, ...diaB13, ...diaB48, ...diaB912CD, ...cnC1, ...cnC2, ...cnC34, ...gdcdAll, ...hdtnAll, ...th17, ...th811, ...th1216 }

export const getChapters = (subjectId) => TOC[subjectId] || []
export const getLesson = (lessonId) => LESSONS[lessonId] || null
export const hasLesson = (lessonId) => Boolean(LESSONS[lessonId])
export const countLessons = (subjectId) =>
  getChapters(subjectId).reduce((n, c) => n + c.lessons.filter((l) => hasLesson(l.id)).length, 0)
export const totalLessons = (subjectId) => getChapters(subjectId).reduce((n, c) => n + c.lessons.length, 0)
export const allLessonsOf = (subjectId) => Object.values(LESSONS).filter((l) => l.subject === subjectId)
