import React from 'react'
import NavbarSection from '../sections/NavbarSection/NavbarSection'
import FooterSection from '../sections/FooterSection/FooterSection'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './TermsAndConditions.module.css'

function TermsAndConditions() {
  const { language } = useLanguage()
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={styles.container}>
      <NavbarSection />
      <div className={styles.content}>
        <h1 className={styles.title}>الشروط والأحكام</h1>
        <div className={styles.divider}></div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>المقدمة</h2>
          <p className={styles.paragraph}>
            مرحبًا بك في تطبيق خبير. تنظّم هذه الشروط استخدامك للتطبيق والخدمات المتاحة من خلاله، ويُعد استخدامك للتطبيق أو إنشاء حساب موافقة منك على الالتزام بهذه الشروط وأي تحديثات تطرأ عليها.
          </p>
          <p className={styles.paragraph}>
            يخضع استخدام التطبيق كذلك لسياسة الخصوصية المعتمدة، والتي توضح كيفية جمع ومعالجة وحماية البيانات الشخصية.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>دور التطبيق</h2>
          <p className={styles.paragraph}>
            يعمل تطبيق خبير كمنصة تقنية تربط بين العملاء ومزودي الخدمة المستقلين، ولا يقدم الخدمات بنفسه، ولا يُعد جهة توظيف، ولا يُعتبر طرفًا في أي اتفاق يتم بين العميل ومزود الخدمة، وأي اتفاق ينشأ بعد قبول الطلب يكون اتفاقًا مباشرًا بين الطرفين.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>الحساب</h2>
          <p className={styles.paragraph}>
            يلتزم المستخدم بتقديم بيانات صحيحة ودقيقة عند التسجيل، والحفاظ على سرية معلومات حسابه، ويتحمل المسؤولية الكاملة عن أي نشاط يتم عبر حسابه، ويحق للتطبيق تعليق أو إغلاق الحساب في حال مخالفة هذه الشروط.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>الأهلية</h2>
          <p className={styles.paragraph}>
            يجب أن يكون عمر المستخدم 18 عامًا أو أكثر لاستخدام التطبيق، ويُعد استمرار الاستخدام إقرارًا باستيفاء شرط الأهلية.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>طلب الخدمة</h2>
          <p className={styles.paragraph}>
            يستطيع العميل تقديم طلب خدمة عبر إدخال تفاصيل المشكلة أو الاحتياج وتحديد الموقع والوقت، ويُعد الطلب مبدئيًا إلى أن يتم قبوله من مزود الخدمة عبر التطبيق، وعند القبول ينشأ اتفاق مباشر بين الطرفين لتنفيذ الخدمة وفق التفاصيل المتفق عليها، ويقتصر دور التطبيق على عرض الطلبات وتمكين التواصل وإدارة الحالة التقنية للطلب.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>حالة الطلب</h2>
          <p className={styles.paragraph}>
            يتم عرض الطلب داخل التطبيق بإحدى الحالات التالية: (جديد، قيد التنفيذ، مكتمل، ملغي)، وذلك لأغراض تنظيمية وتقنية فقط، ولا يتحمل التطبيق مسؤولية أي خطأ في تحديث الحالة من قبل المستخدمين.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>إتمام الخدمة</h2>
          <p className={styles.paragraph}>
            تُعد الخدمة منتهية عند إعلان مزود الخدمة إتمامها عبر التطبيق، ويتحمل مزود الخدمة المسؤولية الكاملة عن جودة العمل وسلامته، كما يتحمل العميل مسؤولية مراجعة الخدمة وقت التنفيذ، وأي اعتراض يجب أن يتم مباشرة بين الطرفين دون مسؤولية على التطبيق.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>الدفع</h2>
          <p className={styles.paragraph}>
            يتم الاتفاق على قيمة الخدمة بين العميل ومزود الخدمة مباشرة، ويتم الدفع خارج التطبيق (حالياً)، ولا يتحمل التطبيق مسؤولية تحصيل أو ضمان أي مبالغ أو نزاعات مالية بين الطرفين.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>الذكاء الاصطناعي</h2>
          <p className={styles.paragraph}>
            قد يتضمن التطبيق أدوات أو توصيات تعتمد على تقنيات الذكاء الاصطناعي، وجميع التوصيات الناتجة عنها إرشادية فقط ومبنية على البيانات المدخلة، ولا تُعد استشارة مهنية، ولا يضمن التطبيق دقة أو اكتمال هذه التوصيات، ويتحمل المستخدم مسؤولية القرار النهائي.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>التقييمات والمراجعات</h2>
          <p className={styles.paragraph}>
            يحق للعميل تقييم مزود الخدمة بعد إتمام العمل، ويجب أن تكون التقييمات صادقة وغير مسيئة، ويحق للتطبيق حذف أي محتوى مخالف، ولا يتحمل مسؤولية محتوى التقييمات المنشورة من المستخدمين.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>النزاعات</h2>
          <p className={styles.paragraph}>
            أي نزاع ينشأ بين العميل ومزود الخدمة يكون بينهما مباشرة، ولا يُعد التطبيق طرفًا قانونيًا في أي مطالبة، ويجوز له التدخل وديًا دون التزام، ويحق له تعليق الحسابات في حال إساءة الاستخدام المتكررة.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>مسؤولية مزود الخدمة</h2>
          <p className={styles.paragraph}>
            يعمل مزود الخدمة بصفته متعاقداً مستقلاً، ويتحمل حصرياً مسؤولية الحصول على كافة التراخيص المهنية أو النظامية اللازمة لممارسة الخدمة داخل المملكة العربية السعودية. يحق للتطبيق طلب إثبات هذه التراخيص أو الوثائق الثبوتية في أي وقت، كما يلتزم المزود بالأنظمة والمعايير المعمول بها. إن أي أضرار، إصابات، أو خسائر (مادية أو معنوية) ناتجة عن تنفيذ الخدمة تقع ضمن مسؤوليته الكاملة المنفردة دون أي أدنى مسؤولية على التطبيق.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>إساءة الاستخدام</h2>
          <p className={styles.paragraph}>
            يُمنع استخدام التطبيق لأغراض غير قانونية أو احتيالية أو لإساءة استخدام البيانات، ويحق للتطبيق تعليق أو إغلاق الحساب عند المخالفة.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>حدود المسؤولية</h2>
          <p className={styles.paragraph}>
            يعمل التطبيق كوسيط تقني فقط ولا يضمن جودة الخدمة أو الالتزام بالمواعيد أو نتائج العمل، ويتم استخدامه على مسؤولية المستخدم الخاصة، ولا يتحمل التطبيق أي خسائر مباشرة أو غير مباشرة ناتجة عن استخدامه.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>البيانات</h2>
          <p className={styles.paragraph}>
            يتم جمع ومعالجة البيانات الشخصية وفقاً لسياسة الخصوصية المعتمدة ونظام حماية البيانات الشخصية (PDPL) في المملكة العربية السعودية. قد يحتفظ التطبيق بسجل الطلبات لأغراض تنظيمية وأمنية، كما قد يستخدم بيانات تحليلية عامة لتحسين الأداء دون الكشف عن هوية المستخدم.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>حقوق البيانات</h2>
          <p className={styles.paragraph}>
            يحق للمستخدم ممارسة حقوقه المتعلقة ببياناته الشخصية، بما في ذلك حق الوصول والتصحيح والحذف وسحب الموافقة، وذلك وفق ما هو موضح في سياسة الخصوصية المعتمدة.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>القانون والاختصاص</h2>
          <p className={styles.paragraph}>
            تخضع هذه الشروط لأنظمة المملكة العربية السعودية، ويجوز تحديثها عند الحاجة، ويُعد استمرار استخدام التطبيق بعد أي تحديث موافقة على الشروط المعدلة.
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default TermsAndConditions
