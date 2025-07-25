// Data structure for projects
export interface Project {
  id: number;
  sector: string;
  name: string;
  agency: string;
  signed: boolean;
}

export interface SectorSummary {
  sector: string;
  totalProjects: number;
  signedProjects: number;
  completionPercentage: number;
}

// Project data from the table
export const projectsData: Project[] = [
  // القدرات البشرية - Human Capabilities
  { id: 1, sector: "القدرات البشرية", name: "المجلس التخصصي لجمعيات الطفولة", agency: "مجلس الجمعيات الأهلية", signed: false },
  { id: 2, sector: "القدرات البشرية", name: "تعليم المهارات الأساسية لأطفال التوحد", agency: "شركة تبيان للتعليم", signed: true },
  { id: 3, sector: "القدرات البشرية", name: "تعليم أسماء الله الحسنى للأطفال", agency: "مركزالحسنى", signed: true },
  { id: 4, sector: "القدرات البشرية", name: "تفسير الأطفال", agency: "مركز تفسير للدراسات", signed: true },
  { id: 5, sector: "القدرات البشرية", name: "امتياز لبناء المهارات المهنية للطلاب الجامعيين", agency: "تأهيل الموارد المحدودة", signed: true },
  { id: 6, sector: "القدرات البشرية", name: "صندوق الشهادات المهنية في الجامعات", agency: "جامعة الحدود الشمالية", signed: true },
  { id: 7, sector: "القدرات البشرية", name: "2صندوق الشهادات المهنية في الجامعات", agency: "جامعة الملك عبدالعزيز", signed: false },
  { id: 8, sector: "القدرات البشرية", name: "وحدة الموارد البشرية المشتركة في الجمعيات الشبابية", agency: "المجلس التخصصي للجمعيات الشبابية", signed: false },
  { id: 9, sector: "القدرات البشرية", name: "تأهيل أخصائي أندية الفتيات", agency: "اللجنة التنسيقية للجمعيات النسائية - مركز مساق", signed: true },
  { id: 10, sector: "القدرات البشرية", name: "الأكاديمية الوطنية للقطاع غير الربحي", agency: " مؤسسة نمو الأهلية ", signed: true },
  { id: 10, sector: "القدرات البشرية", name: "تأهيل طلاب المنح على المهارات الرقمية", agency: " جمعية السراج", signed: false },
  { id: 10, sector: "القدرات البشرية", name: "كلية الدراسات الإسلامية باللغة الإسبانية", agency: " مؤسسة المعارف العالمية التعليمية", signed: false },
  { id: 10, sector: "القدرات البشرية", name: "التعليم التنموي", agency: " شركة يافع المستقبل ", signed: true },
  { id: 10, sector: "القدرات البشرية", name: "تأهيل طلاب المنح على القضاء", agency: " جمعية قبس القضائية ", signed: true },
  { id: 10, sector: "القدرات البشرية", name: "تأهيل طلاب المنح على المهارات الرقمية", agency: " جمعية ركن الحوار ", signed: true },
  { id: 10, sector: "القدرات البشرية", name: "تأهيل بيئات الطفولة", agency: " جمعية تحفيظ القرآن الكريم ببريدة ", signed: true },
  
  
  // ضيوف الرحمن - Guests of Rahman
  { id: 11, sector: "ضيوف الرحمن", name: "مركز متخصص لخدمة ضيوف الرحمن الناطقين باللغة الملاوية", agency: "جمعية آفاق المعرفة للتواصل الحضاري", signed: false },
  { id: 12, sector: "ضيوف الرحمن", name: "مركز دمانا للتبرع بالدم في المدينة المنورة", agency: "جمعية دمانا", signed: true },
  { id: 13, sector: "ضيوف الرحمن", name: "رحلة النخب العلمية", agency: "جمعية منافع الحجاج والمعتمرين والزوار", signed: true },
  { id: 14, sector: "ضيوف الرحمن", name: "حلقات حفظ السنة النبوية بالمدينة المنورة", agency: "وكالة الحرمين", signed: true },
  { id: 15, sector: "ضيوف الرحمن", name: "مقطورات صحية متنقلة في الحرمين والمنافذ البرية", agency: "هيئة الهلال الأحمر السعودي", signed: true },
  { id: 16, sector: "ضيوف الرحمن", name: "مقطورات صحية متنقلة في الحرمين والمنافذ البرية", agency: "جمعية بادر للأجهزة الطبية", signed: true },
  { id: 17, sector: "ضيوف الرحمن", name: "حج البدل", agency: "جمعية الدعوة والإرشاد بالعزيزية والعوالي", signed: true },
  { id: 62, sector: "ضيوف الرحمن", name: "برنامج الوقار لتأهيل الحفاظ في الحرم المدني", agency: "جمعية تعلّم", signed: true },
  { id: 63, sector: "ضيوف الرحمن", name: "وعاية العلم", agency: "جمعية معرفة", signed: true },
  { id: 64, sector: "ضيوف الرحمن", name: "توثيق ونشر دروس الحرم المكي", agency: "وقف إشراقة", signed: false },
  { id: 65, sector: "ضيوف الرحمن", name: "طباعة المواد العلمية والتوعوية لزوار الحرمين", agency: "جمعية كتاب وقارئ", signed: true },
  
  // السجناء وأسرهم - Prisoners and Families
  { id: 18, sector: "السجناء وأسرهم", name: "تأسيس جمعية تعليمية للسجناء", agency: "المديرية العامة للسجون - تراحم", signed: false },
  { id: 19, sector: "السجناء وأسرهم", name: "تأسيس المراكز التخصصية داخل السجون", agency: "المديرية العامة للسجون", signed: false },
  { id: 20, sector: "السجناء وأسرهم", name: "نوادي القراءة والكتابة الإبداعية في السجون", agency: "نديم - وزارة الثقافة - هيئة المكتبات", signed: true },
  { id: 21, sector: "السجناء وأسرهم", name: "العيادات الإرشادية داخل السجون", agency: "جمعية المودة للتنمية الأسرية - لجنة تراحم", signed: true },
  { id: 22, sector: "السجناء وأسرهم", name: "تأهيل وإعانة المقبلين على الزواج من المفرج عنهم", agency: "اللجنة الوطنية لرعاية السجناء", signed: false },
  { id: 23, sector: "السجناء وأسرهم", name: "دبلوم إرشاد التعافي عن بعد", agency: "جامعة تبوك", signed: true },
  { id: 24, sector: "السجناء وأسرهم", name: "تأسيس وتفعيل المراكز التأهيلية لمرضى الإدمان", agency: "جمعية واثق للتعافي من الإدمان بتبوك", signed: false },
  { id: 25, sector: "السجناء وأسرهم", name: "تأسيس وتفعيل المراكز التأهيلية لمرضى الإدمان", agency: "جمعية إشراقة", signed: true },
  { id: 26, sector: "السجناء وأسرهم", name: "تأسيس وتفعيل المراكز التأهيلية لمرضى الإدمان", agency: "جمعية عون لرعاية مرضى الإدمان بعسير", signed: false },
  
  // البحث والابتكار - Research and Innovation
  { id: 27, sector: "البحث والابتكار", name: "رصد وقيادة مؤشرات التنمية الشبابية", agency: "مركز مرشاد", signed: true },
  { id: 28, sector: "البحث والابتكار", name: "دراسة وتصميم رحلة تمكين أسرة السجين", agency: "الفارس للدراسات", signed: false },
  { id: 29, sector: "البحث والابتكار", name: "حوكمة الأوقاف في المملكة العربية السعودية", agency: "مركز استثمار المستقبل - الهيئة العامة للأوقاف", signed: true },
  { id: 30, sector: "البحث والابتكار", name: "منصة شطر للابتكار الاجتماعي", agency: "مجلس الجمعيات الأهلية", signed: true },
  
  // المساجد - Mosques
  { id: 31, sector: "المساجد", name: "تحفيظ جامع شبرا", agency: "جمعية مكنون", signed: true },
  { id: 32, sector: "المساجد", name: "تعليم الصم جامع شبرا", agency: "جمعية شفيع", signed: false },
  { id: 33, sector: "المساجد", name: "الدار النسائية بشبرا", agency: "جمعية مكنون", signed: true },
  { id: 34, sector: "المساجد", name: "تحفيظ جامع الجرادية", agency: "جمعية مكنون", signed: true },
  { id: 35, sector: "المساجد", name: "تحفيظ جامع الخالدية", agency: "جمعية مكنون", signed: true },
  { id: 36, sector: "المساجد", name: "تحفيظ جامع الحاير", agency: "المركز الخيري", signed: false },
  { id: 37, sector: "المساجد", name: "تحفيظ جامع بيش", agency: "جمعية بيش", signed: true },
  { id: 38, sector: "المساجد", name: "الدار النسائية بيش", agency: "جمعية بيش", signed: true },
  { id: 39, sector: "المساجد", name: "تحفيظ جامع الحريق", agency: "جمعية الحريق", signed: true },
  { id: 40, sector: "المساجد", name: "الدار النسائية بالحريق", agency: "جمعية الحريق", signed: true },
  { id: 41, sector: "المساجد", name: "تحفيظ جامع حفر الباطن", agency: "جمعية برهان", signed: true },
  { id: 42, sector: "المساجد", name: "تحفيظ جامع البكيرية", agency: "جمعية البكيرية", signed: true },
  { id: 43, sector: "المساجد", name: "تحفيظ جامع الحوطة", agency: "جمعية الحوطة", signed: false },
  { id: 44, sector: "المساجد", name: "دار ميمونة بنت الحارث", agency: "المركز الخيري", signed: true },
  { id: 45, sector: "المساجد", name: "برامج جامع شبرا - علمي", agency: "جمعية علمية", signed: false },
  { id: 46, sector: "المساجد", name: "برامج جامع بيش - علمي", agency: "جمعية الدعوة ببيش", signed: true },
  { id: 47, sector: "المساجد", name: "برامج جامع الحريق - علمي", agency: "جمعية الدعوة بالحريق", signed: false },
  { id: 48, sector: "المساجد", name: "برامج جامع حفر الباطن - جالية", agency: "جمعية الدعوة بحفر الباطن", signed: false },
  { id: 49, sector: "المساجد", name: "برامج جامع الجرادية - جالية", agency: "جمعية غرب الديرة", signed: false },
  { id: 50, sector: "المساجد", name: "برامج جامع الخالدية - جالية", agency: "جمعية الدعوة بالصناعية", signed: false },
  { id: 51, sector: "المساجد", name: "برامج مسجد الشفا - جالية", agency: "جمعية الدعوة بالشفا", signed: false },
  { id: 52, sector: "المساجد", name: "برامج جامع الحوطة", agency: "جمعية الدعوة بالحوطة", signed: false },
  { id: 53, sector: "المساجد", name: "تشغيل المساجد", agency: "جوامع ومساجد الشيخ عبد الله الراجحي رحمه الله", signed: true },
  { id: 54, sector: "المساجد", name: "إكرام الموتى", agency: "جامع الحريق", signed: true },
  { id: 55, sector: "المساجد", name: "إكرام الموتى", agency: "جامع بيش", signed: true },
  
  // المحتاجون - Those in Need
  { id: 56, sector: "المحتاجون", name: "توزيع التمور", agency: "مزرعة الراجحية - جمعية التمور", signed: true },
  { id: 57, sector: "المحتاجون", name: "الأضاحي", agency: "جمعية إكرام عابري السبيل", signed: true },
  { id: 58, sector: "المحتاجون", name: "تفطير الصائمين", agency: "جوامع ومساجد الشيخ عبد الله الراجحي رحمه الله", signed: true },
  { id: 59, sector: "المحتاجون", name: "المشاريع المقيدة للمحتاجون", agency: "وقف العلماء - جمعية البر بشرورة", signed: false },
  { id: 60, sector: "المحتاجون", name: "مركز أمراض الدم الوراثية", agency: "وزارة الصحة", signed: false },
  { id: 61, sector: "المحتاجون", name: "دعم برامج مركز الملك سلمان للإغاثة", agency: "مركز الملك سلمان للإغاثة", signed: true },
  ];
  

// Overall statistics (محسوبة تلقائياً)
const totalProjects = projectsData.length;
const signedProjects = projectsData.filter(p => p.signed).length;
const completionPercentage = Math.round((signedProjects / totalProjects) * 100);

export const totalStats = {
  totalProjects,
  signedProjects,
  completionPercentage,
};

// Colors for sectors
export const sectorColors = {
  "القدرات البشرية": "#8B5CF6", // Purple
  "ضيوف الرحمن": "#10B981", // Green
  "السجناء وأسرهم": "#F59E0B", // Amber
  "البحث والابتكار": "#3B82F6", // Blue
  "المساجد": "#EC4899", // Pink
  "المحتاجون": "#6366F1", // Indigo
};

// دالة لتحديث حالة التوقيع للمشروع
export function updateProjectStatus(projectId: number, newStatus: boolean): void {
  const projectIndex = projectsData.findIndex(p => p.id === projectId);
  if (projectIndex !== -1) {
    projectsData[projectIndex].signed = newStatus;
  }
}
