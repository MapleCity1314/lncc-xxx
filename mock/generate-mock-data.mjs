import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const mockRoot = path.join(repoRoot, 'mock')
const outputRoot = path.join(mockRoot, 'output')
const manifestPath = path.join(outputRoot, '_crawl_index.json')

const landingPageFiles = {
  'index.htm': 'index/overview.ts',
  'bxgk.htm': 'about/overview.ts',
  'zysz.htm': 'majors/landing.ts',
  'szdw.htm': 'teachers/landing.ts',
  'jyky.htm': 'research/landing.ts',
  'sxjd.htm': 'training/landing.ts',
  'jszz.htm': 'military/landing.ts',
  'xqhz.htm': 'partners/landing.ts',
  'zsjy.htm': 'enrollment/landing.ts',
  'xyh.htm': 'alumni/landing.ts',
}

const subPageFiles = {
  'zysz/jsjwljs.htm': 'majors/programs.ts',
  'zysz/rjjs.htm': 'majors/programs.ts',
  'zysz/rjjs_rjcs_.htm': 'majors/programs.ts',
  'zysz/yjsjsyy.htm': 'majors/programs.ts',
  'zysz/rgznjsyy.htm': 'majors/programs.ts',
  'zysz/szmtjs.htm': 'majors/programs.ts',
  'zysz/ysdh.htm': 'majors/programs.ts',
  'zysz/jsjjcjys.htm': 'majors/lab.ts',
  'szdw/zzjg.htm': 'teachers/organization.ts',
  'szdw/jsfc.htm': 'teachers/faculty.ts',
  'szdw/jsfc1.htm': 'teachers/professors.ts',
  'szdw/bsfc.htm': 'teachers/doctors.ts',
  'jyky/jyxm.htm': 'research/teachingProjects.ts',
  'jyky/kyxm.htm': 'research/researchProjects.ts',
  'jyky/xslw.htm': 'research/papers.ts',
  'jyky/jczz.htm': 'research/textbooks.ts',
  'jyky/cghj.htm': 'research/awards.ts',
  'sxjd/xnsxjd.htm': 'training/internalBases.ts',
  'sxjd/xwsxjd.htm': 'training/externalBases.ts',
  'jszz/rxjx.htm': 'military/onboarding.ts',
  'jszz/rcxx.htm': 'military/study.ts',
  'jszz/rcxl.htm': 'military/training.ts',
  'jszz/rcsh.htm': 'military/life.ts',
  'jszz/jqjx.htm': 'military/camp.ts',
  'jszz/xgzc.htm': 'military/policies.ts',
  'xqhz/hzqy.htm': 'partners/companies.ts',
  'xqhz/hzdt.htm': 'partners/updates.ts',
  'zsjy/jyfw.htm': 'enrollment/employmentServices.ts',
  'zsjy/fqtg.htm': 'enrollment/enterpriseVisits.ts',
  'xyh/xyfc.htm': 'alumni/alumniProfiles.ts',
  'xyh/fxfw.htm': 'alumni/returnServices.ts',
  'xyh/xyxx.htm': 'alumni/alumniInfo.ts',
}

const infoCodeFiles = {
  '1011': ['articles/homepage.ts', 'index/news.ts'],
  '1022': ['articles/homepage.ts', 'index/party.ts'],
  '1023': ['articles/homepage.ts', 'index/career.ts'],
  '1041': ['articles/research.ts', 'research/teachingProjects.ts'],
  '1042': ['articles/research.ts', 'research/researchProjects.ts'],
  '1043': ['articles/research.ts', 'research/papers.ts'],
  '1044': ['articles/research.ts', 'research/textbooks.ts'],
  '1121': ['articles/research.ts', 'research/awards.ts'],
  '1052': ['articles/military.ts', 'military/policies.ts'],
  '1025': ['articles/partners.ts', 'partners/companies.ts'],
  '1091': ['articles/enrollment.ts', 'enrollment/employmentServices.ts'],
  '1074': ['articles/alumni.ts', 'alumni/landing.ts'],
}

const collectionMeta = {
  navigation: ['站点导航', '根据首页与抓取索引整理的导航树。'],
  crawlIndex: ['抓取索引', '标准化后的 crawl manifest。'],
  quickLinks: ['首页快捷入口', '从首页正文和抓取结果归纳的快捷入口。'],
  indexOverview: ['首页概览', '首页正文与栏目摘要。'],
  indexNews: ['首页新闻通知', '首页新闻通知栏目文章。'],
  indexParty: ['首页党团建设', '首页党团建设栏目文章。'],
  indexCareer: ['首页创业就业', '首页创业就业栏目文章。'],
  aboutOverview: ['本系概况', '院系概况页正文。'],
  majorsLanding: ['专业设置入口', '专业设置栏目入口页。'],
  majorPrograms: ['专业详情页', '专业设置下各专业详情页。'],
  majorLab: ['教研室与实验方向', '专业设置下的教研室页面。'],
  teachersLanding: ['师资队伍入口', '师资队伍栏目入口页。'],
  teachersOrganization: ['组织机构', '师资队伍中的组织机构页面。'],
  teachersFaculty: ['教师风采', '教师风采页面。'],
  teachersProfessors: ['教授风采', '教授风采页面。'],
  teachersDoctors: ['博士风采', '博士风采页面。'],
  researchLanding: ['教研科研入口', '教研科研栏目入口页。'],
  researchTeachingProjects: ['教研项目', '教研项目栏目与相关文章。'],
  researchProjects: ['科研项目', '科研项目栏目与相关文章。'],
  researchPapers: ['学术论文', '学术论文栏目与相关文章。'],
  researchTextbooks: ['教材著作', '教材著作栏目与相关文章。'],
  researchAwards: ['成果获奖', '成果获奖栏目与相关文章。'],
  trainingLanding: ['实训基地入口', '实训基地栏目入口页。'],
  trainingInternal: ['校内实训基地', '校内实训基地页面。'],
  trainingExternal: ['校外实训基地', '校外实训基地页面。'],
  militaryLanding: ['警士直招入口', '警士直招栏目入口页。'],
  militaryOnboarding: ['入学军训', '警士直招中的入学军训。'],
  militaryStudy: ['日常学习', '警士直招中的日常学习。'],
  militaryTraining: ['日常训练', '警士直招中的日常训练。'],
  militaryLife: ['日常生活', '警士直招中的日常生活。'],
  militaryCamp: ['假期集训', '警士直招中的假期集训。'],
  militaryPolicies: ['警士直招政策', '政策页面及相关文章。'],
  partnersLanding: ['校企合作入口', '校企合作栏目入口页。'],
  partnersCompanies: ['合作企业', '合作企业页面及相关文章。'],
  partnersUpdates: ['合作动态', '合作动态页面。'],
  enrollmentLanding: ['招生就业入口', '招生就业栏目入口页。'],
  enrollmentServices: ['就业服务', '就业服务页面及相关文章。'],
  enrollmentVisits: ['访企拓岗', '访企拓岗页面。'],
  enrollmentAdmissionsLinks: ['招生入口', '招生相关外链入口。'],
  enrollmentEmploymentLinks: ['就业入口', '就业相关外链入口。'],
  alumniLanding: ['校友会入口', '校友会栏目入口页及相关通知。'],
  alumniProfiles: ['校友风采', '校友风采页面。'],
  alumniReturnServices: ['返校服务', '返校服务页面。'],
  alumniInfo: ['校友信息', '校友信息页面。'],
  articlesHomepage: ['首页文章归档', '首页三大资讯区文章汇总。'],
  articlesResearch: ['教研科研文章归档', '教研科研详情页归档。'],
  articlesMilitary: ['警士直招文章归档', '警士直招政策详情页归档。'],
  articlesPartners: ['校企合作文章归档', '校企合作详情页归档。'],
  articlesEnrollment: ['招生就业文章归档', '就业服务详情页归档。'],
  articlesAlumni: ['校友会文章归档', '校友栏目详情页归档。'],
}

function toPosixPath(value) {
  return value.replace(/\\/g, '/')
}

function normalizeOutputPath(rawPath) {
  if (!rawPath) {
    return ''
  }
  const basename = path.basename(rawPath)
  return path.join(outputRoot, basename)
}

function normalizeManifestEntry(entry) {
  const url = new URL(entry.url)
  const pathname = url.pathname.replace(/^\/+/, '')
  const relativeWithinXxx = pathname.startsWith('xxx/') ? pathname.slice(4) : pathname
  const segments = relativeWithinXxx.split('/').filter(Boolean)
  const topLevel = segments[0]?.replace(/\.htm$/i, '') ?? ''

  return {
    label: entry.text,
    url: entry.url,
    status: entry.status,
    title: entry.title,
    absoluteOutputPath: normalizeOutputPath(entry.output),
    relativeOutputPath: entry.output ? toPosixPath(path.relative(repoRoot, normalizeOutputPath(entry.output))) : '',
    path: relativeWithinXxx,
    topLevel,
  }
}

function slugify(value) {
  return value
    .replace(/\.md$/i, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

function cleanupParagraph(block) {
  return block.replace(/\s+/g, ' ').trim()
}

function uniqueBy(items, getKey) {
  const seen = new Set()
  return items.filter((item) => {
    const key = getKey(item)
    if (seen.has(key)) {
      return false
    }
    seen.add(key)
    return true
  })
}

function shouldKeepParagraph(block) {
  if (!block) {
    return false
  }
  if (/^\[!\[[^\]]*\]\([^)]+\)\]\([^)]+\)$/.test(block)) {
    return false
  }
  if (/^[-*]\s+\[[^\]]+\]\([^)]+\)$/.test(block)) {
    return false
  }
  if (/^\|/.test(block)) {
    return false
  }
  if (/^!?\[[^\]]*\]\([^)]+\)$/.test(block)) {
    return false
  }
  if (/^(首页上页\d+下页尾页|最佳浏览效果：|Copyright ©)/.test(block)) {
    return false
  }
  if (/^地址：|^联系电话：|^当前位置:/.test(block)) {
    return false
  }
  if (/^-\s+\[.+\]\(.+\)(\s+-\s+\[.+\]\(.+\))+$/u.test(block)) {
    return false
  }
  if (/^\d{4}\/\d{2}\/\d{2}\s+\[[^\]]+\]\([^)]+\)$/u.test(block)) {
    return false
  }
  return true
}

function parseLinks(body) {
  const links = []
  const bodyWithoutLinkedImages = body.replace(/\[!\[[^\]]*\]\([^)]+\)\]\([^)]+\)/g, '')
  const matcher = /\[([^\]]+)\]\(([^)]+)\)/g
  for (const match of bodyWithoutLinkedImages.matchAll(matcher)) {
    const rawUrl = match[2].trim()
    const url = rawUrl.startsWith('email:') ? rawUrl.replace(/^email:/, 'mailto:') : rawUrl
    links.push({
      label: match[1].trim(),
      url,
      isExternal: /^https?:\/\//.test(url) || /^mailto:/.test(url),
    })
  }
  return uniqueBy(links, (item) => `${item.label}::${item.url}`)
}

function parseImages(body) {
  const images = []
  const matcher = /!\[([^\]]*)\]\(([^)]+)\)/g
  for (const match of body.matchAll(matcher)) {
    const imageUrl = match[2].trim()
    if (imageUrl.startsWith('/__local/')) {
      continue
    }
    images.push({
      alt: match[1].trim(),
      url: imageUrl,
    })
  }
  return images
}

function parseHeadings(body) {
  const headings = []
  for (const line of body.split('\n')) {
    const trimmed = line.trim()
    const headingMatch = trimmed.match(/^#{1,6}\s+(.+)$/)
    if (headingMatch) {
      headings.push(headingMatch[1].trim())
      continue
    }
    const boldHeadingMatch = trimmed.match(/^\*\*(.+?)\*\*$/)
    if (boldHeadingMatch) {
      headings.push(boldHeadingMatch[1].trim())
    }
  }
  return [...new Set(headings)]
}

function parseParagraphs(body) {
  return body
    .split(/\n\s*\n/g)
    .map((block) => cleanupParagraph(block))
    .filter((block) => shouldKeepParagraph(block))
}

function extractPublishedAt(lines) {
  for (const line of lines) {
    const trimmed = line.trim()
    const publishLine = trimmed.match(/^发布日期：(.+?)(?:\s+\|.+)?$/)
    if (publishLine) {
      return publishLine[1].trim()
    }
    const slashDate = trimmed.match(/^(\d{4}\/\d{2}\/\d{2})\s+\[/)
    if (slashDate) {
      return slashDate[1]
    }
    const cnDate = trimmed.match(/^(\d{4}年\d{2}月\d{2}日)$/)
    if (cnDate) {
      return cnDate[1]
    }
  }
  return null
}

function inferCategory(entry) {
  const infoMatch = entry.path.match(/^info\/([^/]+)\//)
  if (infoMatch) {
    return infoMatch[1]
  }
  return entry.topLevel || null
}

function sanitizeBody(entry, lines) {
  let workingLines = [...lines]
  const footerStart = workingLines.findIndex((line) =>
    /^\| \[学校主页\]|\| \[系主任邮箱\]|最佳浏览效果：|Copyright ©/.test(line.trim()),
  )
  if (footerStart >= 0) {
    workingLines = workingLines.slice(0, footerStart)
  }

  if (entry.path === 'index.htm') {
    const homepageStart = workingLines.findIndex((line) => line.includes('[新闻通知]('))
    if (homepageStart >= 0) {
      workingLines = workingLines.slice(homepageStart)
    }
  } else {
    const contentStart = workingLines.findIndex((line) => {
      const trimmed = line.trim()
      return (
        /^\*\*一、/.test(trimmed) ||
        /^\*\*建设概况\*\*$/.test(trimmed) ||
        /^#\s+/.test(trimmed) ||
        /^-\s+\[\[/.test(trimmed) ||
        /^\[[^\]]+\]\((\.\.\/)?info\//.test(trimmed) ||
        /^\d{4}\/\d{2}\/\d{2}\s+\[/.test(trimmed)
      )
    })
    if (contentStart > 0 && contentStart > 10) {
      workingLines = workingLines.slice(contentStart)
    }
  }

  const sanitized = workingLines
    .filter((line) => !line.includes('/__local/'))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  const hasSubstantiveLine = sanitized.split('\n').some((line) => {
    const trimmed = line.trim()
    if (!trimmed) {
      return false
    }
    if (/^\[.*\]\([^)]+\)$/.test(trimmed)) {
      return false
    }
    if (/^[-*]\s+\[.*\]\([^)]+\)$/.test(trimmed)) {
      return false
    }
    if (/^\*\*当前位置/.test(trimmed) || trimmed === '正文') {
      return false
    }
    if (/^!?\[[^\]]*\]\([^)]+\)$/.test(trimmed)) {
      return false
    }
    return /[\p{L}\p{N}]{4,}/u.test(trimmed)
  })

  if (entry.path.startsWith('info/') && !hasSubstantiveLine) {
    return ''
  }

  return sanitized
}

function parseBlocks(body) {
  const blocks = []
  for (const rawLine of body.split('\n')) {
    const line = rawLine.trim()
    if (!line) {
      continue
    }
    if (/^#{1,6}\s+/.test(line) || /^\*\*(.+?)\*\*$/.test(line)) {
      blocks.push({ type: 'heading', value: line.replace(/^#{1,6}\s+/, '') })
      continue
    }
    if (/^\|/.test(line)) {
      blocks.push({ type: 'tableRow', value: line })
      continue
    }
    if (/!\[[^\]]*\]\([^)]+\)/.test(line)) {
      blocks.push({ type: 'image', value: line })
      continue
    }
    blocks.push({ type: 'paragraph', value: cleanupParagraph(line) })
  }
  return blocks
}

async function parseMarkdownPage(entry) {
  const raw = await fs.readFile(entry.absoluteOutputPath, 'utf8')
  const normalized = raw.replace(/\r\n/g, '\n')
  const lines = normalized.split('\n')
  const title = lines.find((line) => /^#\s+/.test(line))?.replace(/^#\s+/, '').trim() ?? entry.title
  const sourceUrl =
    lines.find((line) => line.startsWith('- 原始链接:'))?.replace('- 原始链接:', '').trim() ?? entry.url
  const sourceIndex = lines.findIndex((line) => line.startsWith('- 原始链接:'))
  const bodyLines = lines
    .slice(sourceIndex >= 0 ? sourceIndex + 1 : 0)
    .filter((line, index, arr) => !(index === 0 && line.trim() === ''))
  const body = sanitizeBody(entry, bodyLines)
  const paragraphs = parseParagraphs(body)

  return {
    id: slugify(path.basename(entry.absoluteOutputPath)),
    title,
    slug: slugify(entry.path || title),
    group: entry.topLevel || 'external',
    sourcePath: toPosixPath(path.relative(repoRoot, entry.absoluteOutputPath)),
    sourceUrl,
    sourceTitle: entry.title,
    publishedAt: extractPublishedAt(bodyLines),
    category: inferCategory(entry),
    excerpt: paragraphs[0] ?? null,
    body,
    headings: parseHeadings(body),
    paragraphs,
    links: parseLinks(body),
    images: parseImages(body),
    blocks: parseBlocks(body),
  }
}

function toTsLiteral(value, depth = 0) {
  const indent = '  '.repeat(depth)
  const nextIndent = '  '.repeat(depth + 1)

  if (value === undefined) {
    return 'null'
  }
  if (value === null) {
    return 'null'
  }
  if (typeof value === 'string') {
    return JSON.stringify(value)
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '[]'
    }
    const items = value.map((item) => `${nextIndent}${toTsLiteral(item, depth + 1)}`)
    return `[\n${items.join(',\n')}\n${indent}]`
  }
  const entries = Object.entries(value)
  if (entries.length === 0) {
    return '{}'
  }
  const props = entries.map(([key, item]) => `${nextIndent}${key}: ${toTsLiteral(item, depth + 1)}`)
  return `{\n${props.join(',\n')}\n${indent}}`
}

function renderCollectionModule(typeName, itemType, value) {
  return `import type { ${typeName}${itemType ? `, ${itemType}` : ''} } from '@/mock/types'\n\nconst data = ${toTsLiteral(
    value,
  )} satisfies ${typeName}${itemType ? `<${itemType}>` : ''}\n\nexport default data\n`
}

function groupByFile(assignments) {
  const map = new Map()
  for (const assignment of assignments) {
    if (!map.has(assignment.file)) {
      map.set(assignment.file, [])
    }
    map.get(assignment.file).push(assignment.page)
  }
  return map
}

function buildNavigation(entries) {
  const topOrder = ['index.htm', 'bxgk.htm', 'zysz.htm', 'szdw.htm', 'jyky.htm', 'sxjd.htm', 'jszz.htm', 'xqhz.htm', 'zsjy.htm', 'xyh.htm']
  const topItems = topOrder
    .map((filePath) => entries.find((entry) => entry.path === filePath))
    .filter(Boolean)

  return topItems.map((entry) => {
    const folderPrefix = entry.path.replace(/\.htm$/, '')
    const children = entries
      .filter((candidate) => candidate.path.startsWith(`${folderPrefix}/`) && !candidate.path.startsWith('info/'))
      .map((candidate) => ({
        label: candidate.label,
        url: candidate.url,
        isExternal: false,
      }))

    return {
      label: entry.label,
      url: entry.url,
      isExternal: false,
      children,
    }
  })
}

function buildQuickLinks(homepagePage, entries) {
  const preferredLabels = ['招生咨询', '就业咨询', '访企拓岗', '学校主页']
  const linkMap = new Map()

  for (const link of homepagePage.links) {
    if (preferredLabels.includes(link.label)) {
      linkMap.set(link.label, link)
    }
  }

  for (const entry of entries) {
    if (preferredLabels.includes(entry.label) && !linkMap.has(entry.label)) {
      linkMap.set(entry.label, {
        label: entry.label,
        url: entry.url,
        isExternal: true,
      })
    }
  }

  return preferredLabels.map((label) => linkMap.get(label)).filter(Boolean)
}

function createCollection(key, items) {
  const [section, description] = collectionMeta[key]
  return {
    section,
    description,
    items,
  }
}

function relativeTsImportFile(filePath) {
  return toPosixPath(filePath)
}

export async function generateMockData(options = {}) {
  const writeFiles = options.writeFiles ?? false
  const manifestRaw = await fs.readFile(manifestPath, 'utf8')
  const manifest = JSON.parse(manifestRaw).map(normalizeManifestEntry)
  const publicManifest = manifest.map(({ absoluteOutputPath, ...entry }) => entry)
  const parsableEntries = manifest.filter((entry) => entry.absoluteOutputPath && entry.absoluteOutputPath.endsWith('.md'))
  const pages = await Promise.all(parsableEntries.map((entry) => parseMarkdownPage(entry).then((page) => ({ entry, page }))))

  const fileAssignments = []

  for (const { entry, page } of pages) {
    if (landingPageFiles[entry.path]) {
      fileAssignments.push({ file: landingPageFiles[entry.path], page })
    }

    if (subPageFiles[entry.path]) {
      fileAssignments.push({ file: subPageFiles[entry.path], page })
    }

    const infoMatch = entry.path.match(/^info\/([^/]+)\//)
    if (infoMatch) {
      for (const file of infoCodeFiles[infoMatch[1]] ?? []) {
        fileAssignments.push({ file, page })
      }
    }
  }

  const groupedFiles = groupByFile(fileAssignments)
  const homepagePage = pages.find(({ entry }) => entry.path === 'index.htm')?.page

  const collections = {
    navigation: buildNavigation(manifest),
    crawlIndex: publicManifest,
    quickLinks: buildQuickLinks(homepagePage, manifest),
    indexOverview: createCollection('indexOverview', groupedFiles.get('index/overview.ts') ?? []),
    indexNews: createCollection('indexNews', groupedFiles.get('index/news.ts') ?? []),
    indexParty: createCollection('indexParty', groupedFiles.get('index/party.ts') ?? []),
    indexCareer: createCollection('indexCareer', groupedFiles.get('index/career.ts') ?? []),
    aboutOverview: createCollection('aboutOverview', groupedFiles.get('about/overview.ts') ?? []),
    majorsLanding: createCollection('majorsLanding', groupedFiles.get('majors/landing.ts') ?? []),
    majorPrograms: createCollection('majorPrograms', groupedFiles.get('majors/programs.ts') ?? []),
    majorLab: createCollection('majorLab', groupedFiles.get('majors/lab.ts') ?? []),
    teachersLanding: createCollection('teachersLanding', groupedFiles.get('teachers/landing.ts') ?? []),
    teachersOrganization: createCollection('teachersOrganization', groupedFiles.get('teachers/organization.ts') ?? []),
    teachersFaculty: createCollection('teachersFaculty', groupedFiles.get('teachers/faculty.ts') ?? []),
    teachersProfessors: createCollection('teachersProfessors', groupedFiles.get('teachers/professors.ts') ?? []),
    teachersDoctors: createCollection('teachersDoctors', groupedFiles.get('teachers/doctors.ts') ?? []),
    researchLanding: createCollection('researchLanding', groupedFiles.get('research/landing.ts') ?? []),
    researchTeachingProjects: createCollection('researchTeachingProjects', groupedFiles.get('research/teachingProjects.ts') ?? []),
    researchProjects: createCollection('researchProjects', groupedFiles.get('research/researchProjects.ts') ?? []),
    researchPapers: createCollection('researchPapers', groupedFiles.get('research/papers.ts') ?? []),
    researchTextbooks: createCollection('researchTextbooks', groupedFiles.get('research/textbooks.ts') ?? []),
    researchAwards: createCollection('researchAwards', groupedFiles.get('research/awards.ts') ?? []),
    trainingLanding: createCollection('trainingLanding', groupedFiles.get('training/landing.ts') ?? []),
    trainingInternal: createCollection('trainingInternal', groupedFiles.get('training/internalBases.ts') ?? []),
    trainingExternal: createCollection('trainingExternal', groupedFiles.get('training/externalBases.ts') ?? []),
    militaryLanding: createCollection('militaryLanding', groupedFiles.get('military/landing.ts') ?? []),
    militaryOnboarding: createCollection('militaryOnboarding', groupedFiles.get('military/onboarding.ts') ?? []),
    militaryStudy: createCollection('militaryStudy', groupedFiles.get('military/study.ts') ?? []),
    militaryTraining: createCollection('militaryTraining', groupedFiles.get('military/training.ts') ?? []),
    militaryLife: createCollection('militaryLife', groupedFiles.get('military/life.ts') ?? []),
    militaryCamp: createCollection('militaryCamp', groupedFiles.get('military/camp.ts') ?? []),
    militaryPolicies: createCollection('militaryPolicies', groupedFiles.get('military/policies.ts') ?? []),
    partnersLanding: createCollection('partnersLanding', groupedFiles.get('partners/landing.ts') ?? []),
    partnersCompanies: createCollection('partnersCompanies', groupedFiles.get('partners/companies.ts') ?? []),
    partnersUpdates: createCollection('partnersUpdates', groupedFiles.get('partners/updates.ts') ?? []),
    enrollmentLanding: createCollection('enrollmentLanding', groupedFiles.get('enrollment/landing.ts') ?? []),
    enrollmentServices: createCollection('enrollmentServices', groupedFiles.get('enrollment/employmentServices.ts') ?? []),
    enrollmentVisits: createCollection('enrollmentVisits', groupedFiles.get('enrollment/enterpriseVisits.ts') ?? []),
    enrollmentAdmissionsLinks: createCollection(
      'enrollmentAdmissionsLinks',
      manifest.filter((entry) => entry.label === '招生信息').map((entry) => ({ label: entry.label, url: entry.url, isExternal: true })),
    ),
    enrollmentEmploymentLinks: createCollection(
      'enrollmentEmploymentLinks',
      manifest.filter((entry) => entry.label === '招聘信息').map((entry) => ({ label: entry.label, url: entry.url, isExternal: true })),
    ),
    alumniLanding: createCollection('alumniLanding', groupedFiles.get('alumni/landing.ts') ?? []),
    alumniProfiles: createCollection('alumniProfiles', groupedFiles.get('alumni/alumniProfiles.ts') ?? []),
    alumniReturnServices: createCollection('alumniReturnServices', groupedFiles.get('alumni/returnServices.ts') ?? []),
    alumniInfo: createCollection('alumniInfo', groupedFiles.get('alumni/alumniInfo.ts') ?? []),
    articlesHomepage: createCollection('articlesHomepage', groupedFiles.get('articles/homepage.ts') ?? []),
    articlesResearch: createCollection('articlesResearch', groupedFiles.get('articles/research.ts') ?? []),
    articlesMilitary: createCollection('articlesMilitary', groupedFiles.get('articles/military.ts') ?? []),
    articlesPartners: createCollection('articlesPartners', groupedFiles.get('articles/partners.ts') ?? []),
    articlesEnrollment: createCollection('articlesEnrollment', groupedFiles.get('articles/enrollment.ts') ?? []),
    articlesAlumni: createCollection('articlesAlumni', groupedFiles.get('articles/alumni.ts') ?? []),
  }

  const files = [
    {
      filePath: 'mock/meta/crawlIndex.ts',
      content: renderCollectionModule('MockCollection', 'MockCrawlEntry', createCollection('crawlIndex', collections.crawlIndex)),
    },
    {
      filePath: 'mock/meta/navigation.ts',
      content: renderCollectionModule('MockCollection', 'MockNavItem', createCollection('navigation', collections.navigation)),
    },
    {
      filePath: 'mock/index/quickLinks.ts',
      content: renderCollectionModule('MockCollection', 'MockLink', createCollection('quickLinks', collections.quickLinks)),
    },
    {
      filePath: 'mock/index/overview.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.indexOverview),
    },
    {
      filePath: 'mock/index/news.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.indexNews),
    },
    {
      filePath: 'mock/index/party.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.indexParty),
    },
    {
      filePath: 'mock/index/career.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.indexCareer),
    },
    {
      filePath: 'mock/about/overview.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.aboutOverview),
    },
    {
      filePath: 'mock/majors/landing.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.majorsLanding),
    },
    {
      filePath: 'mock/majors/programs.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.majorPrograms),
    },
    {
      filePath: 'mock/majors/lab.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.majorLab),
    },
    {
      filePath: 'mock/teachers/landing.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.teachersLanding),
    },
    {
      filePath: 'mock/teachers/organization.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.teachersOrganization),
    },
    {
      filePath: 'mock/teachers/faculty.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.teachersFaculty),
    },
    {
      filePath: 'mock/teachers/professors.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.teachersProfessors),
    },
    {
      filePath: 'mock/teachers/doctors.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.teachersDoctors),
    },
    {
      filePath: 'mock/research/landing.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.researchLanding),
    },
    {
      filePath: 'mock/research/teachingProjects.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.researchTeachingProjects),
    },
    {
      filePath: 'mock/research/researchProjects.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.researchProjects),
    },
    {
      filePath: 'mock/research/papers.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.researchPapers),
    },
    {
      filePath: 'mock/research/textbooks.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.researchTextbooks),
    },
    {
      filePath: 'mock/research/awards.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.researchAwards),
    },
    {
      filePath: 'mock/training/landing.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.trainingLanding),
    },
    {
      filePath: 'mock/training/internalBases.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.trainingInternal),
    },
    {
      filePath: 'mock/training/externalBases.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.trainingExternal),
    },
    {
      filePath: 'mock/military/landing.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.militaryLanding),
    },
    {
      filePath: 'mock/military/onboarding.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.militaryOnboarding),
    },
    {
      filePath: 'mock/military/study.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.militaryStudy),
    },
    {
      filePath: 'mock/military/training.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.militaryTraining),
    },
    {
      filePath: 'mock/military/life.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.militaryLife),
    },
    {
      filePath: 'mock/military/camp.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.militaryCamp),
    },
    {
      filePath: 'mock/military/policies.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.militaryPolicies),
    },
    {
      filePath: 'mock/partners/landing.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.partnersLanding),
    },
    {
      filePath: 'mock/partners/companies.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.partnersCompanies),
    },
    {
      filePath: 'mock/partners/updates.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.partnersUpdates),
    },
    {
      filePath: 'mock/enrollment/landing.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.enrollmentLanding),
    },
    {
      filePath: 'mock/enrollment/employmentServices.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.enrollmentServices),
    },
    {
      filePath: 'mock/enrollment/enterpriseVisits.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.enrollmentVisits),
    },
    {
      filePath: 'mock/enrollment/admissionsLinks.ts',
      content: renderCollectionModule('MockCollection', 'MockLink', collections.enrollmentAdmissionsLinks),
    },
    {
      filePath: 'mock/enrollment/employmentLinks.ts',
      content: renderCollectionModule('MockCollection', 'MockLink', collections.enrollmentEmploymentLinks),
    },
    {
      filePath: 'mock/alumni/landing.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.alumniLanding),
    },
    {
      filePath: 'mock/alumni/alumniProfiles.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.alumniProfiles),
    },
    {
      filePath: 'mock/alumni/returnServices.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.alumniReturnServices),
    },
    {
      filePath: 'mock/alumni/alumniInfo.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.alumniInfo),
    },
    {
      filePath: 'mock/articles/homepage.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.articlesHomepage),
    },
    {
      filePath: 'mock/articles/research.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.articlesResearch),
    },
    {
      filePath: 'mock/articles/military.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.articlesMilitary),
    },
    {
      filePath: 'mock/articles/partners.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.articlesPartners),
    },
    {
      filePath: 'mock/articles/enrollment.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.articlesEnrollment),
    },
    {
      filePath: 'mock/articles/alumni.ts',
      content: renderCollectionModule('MockCollection', 'MockPage', collections.articlesAlumni),
    },
  ]

  if (writeFiles) {
    for (const file of files) {
      const absolutePath = path.join(repoRoot, file.filePath)
      await fs.mkdir(path.dirname(absolutePath), { recursive: true })
      await fs.writeFile(absolutePath, file.content, 'utf8')
    }
  }

  return {
    files: files.map((file) => ({ path: relativeTsImportFile(file.filePath) })),
    collections,
  }
}

if (process.argv[1] === __filename) {
  const result = await generateMockData({ writeFiles: true })
  console.log(`generated ${result.files.length} mock files`)
}
