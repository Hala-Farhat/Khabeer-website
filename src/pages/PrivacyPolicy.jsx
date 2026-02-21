import React from 'react'
import NavbarSection from '../sections/NavbarSection/NavbarSection'
import FooterSection from '../sections/FooterSection/FooterSection'
import { useLanguage } from '../contexts/LanguageContext'
import styles from './PrivacyPolicy.module.css'

function PrivacyPolicy() {
  const { language } = useLanguage()
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={styles.container}>
      <NavbarSection />
      <div className={styles.content}>
        <h1 className={styles.title}>سياسة الخصوصية</h1>
        <div className={styles.divider}></div>
        
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>المقدمة</h2>
          <p className={styles.paragraph}>
            يضع تطبيق خبير خصوصية مستخدميه (العملاء ومزودي الخدمة) في مقدمة أولوياته. توضح هذه السياسة كيفية جمع البيانات الشخصية واستخدامها ومعالجتها وحمايتها وفقًا لنظام حماية البيانات الشخصية (PDPL) المعمول به في المملكة العربية السعودية. باستخدامك للتطبيق، فإنك توافق على سياسة الخصوصية هذه.
          </p>
          <p className={styles.paragraph}>
            تخضع هذه السياسة إلى جانب شروط الاستخدام المعتمدة، والتي تحكم العلاقة بين المستخدم والتطبيق.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>البيانات التي نجمعها</h2>
          <p className={styles.paragraph}>
            يجمع التطبيق فقط البيانات الضرورية لتشغيله وتقديم الخدمات بكفاءة وأمان.
          </p>
          
          <h3 className={styles.subsectionTitle}>بيانات العميل</h3>
          <p className={styles.paragraph}>
            الاسم، رقم الجوال، البريد الإلكتروني، الموقع الجغرافي (GPS) لتمكين توجيه الطلب إلى مزود الخدمة المناسب، تفاصيل الطلب بما في ذلك الوصف والصور والمرفقات والمحادثات داخل التطبيق.
          </p>

          <h3 className={styles.subsectionTitle}>بيانات مزود الخدمة</h3>
          <p className={styles.paragraph}>
            البيانات المهنية مثل المجال والتخصص وسنوات الخبرة، صورة الملف الشخصي والتقييمات، والوثائق الثبوتية مثل الهوية أو الإقامة والتراخيص. تُستخدم هذه الوثائق للتحقق الداخلي فقط ولا يتم عرضها للمستخدمين.
          </p>

          <h3 className={styles.subsectionTitle}>البيانات التقنية</h3>
          <p className={styles.paragraph}>
            عنوان IP، نوع الجهاز، نظام التشغيل، ومعرّفات الجهاز، وذلك لأغراض الأمان وضمان استقرار التطبيق وتحسين أدائه.
          </p>

          <h3 className={styles.subsectionTitle}>بيانات الذكاء الاصطناعي</h3>
          <p className={styles.paragraph}>
            النصوص أو الصور التي يتم رفعها لأغراض التحليل أو التشخيص الآلي، ونتائج المعالجة الصادرة عنها.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>الأساس النظامي لمعالجة البيانات</h2>
          <p className={styles.paragraph}>
            تتم معالجة البيانات الشخصية بناءً على موافقة المستخدم، أو لتنفيذ العلاقة التعاقدية الناتجة عن استخدام التطبيق، أو للالتزام بالمتطلبات النظامية المعمول بها في المملكة العربية السعودية، أو لتحقيق مصالح مشروعة تتعلق بتحسين الخدمات دون الإخلال بحقوق المستخدم.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>كيفية استخدام البيانات</h2>
          <p className={styles.paragraph}>
            تُستخدم البيانات حصريًا لإدارة الحسابات، وتنسيق الطلبات بين العميل ومزود الخدمة، وإرسال إشعارات بحالة الطلب، وتحسين تجربة المستخدم، وحماية الحسابات من الاحتيال أو سوء الاستخدام، وتشغيل أدوات التحليل والذكاء الاصطناعي داخل التطبيق.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>مشاركة البيانات</h2>
          <p className={styles.paragraph}>
            لا يقوم التطبيق ببيع البيانات الشخصية.
          </p>
          <p className={styles.paragraph}>
            تتم مشاركة البيانات فقط بالقدر اللازم لإتمام الخدمة بين العميل ومزود الخدمة، أو مع مزودي خدمات تقنيين لدعم تشغيل التطبيق وفق التزامات حماية البيانات، أو عند طلب الجهات الرسمية المختصة وفق الأنظمة المعمول بها.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>أمن البيانات</h2>
          <p className={styles.paragraph}>
            يطبق التطبيق تدابير تقنية وتنظيمية مناسبة لحماية البيانات من الوصول غير المصرح به أو الفقد أو التعديل أو الإفصاح، بما في ذلك استخدام تقنيات التشفير وضوابط الوصول.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>الاحتفاظ بالبيانات</h2>
          <p className={styles.paragraph}>
            يتم الاحتفاظ بالبيانات الشخصية للمدة اللازمة لتحقيق الأغراض المذكورة في هذه السياسة أو وفقًا لما تقتضيه الأنظمة المعمول بها. عند حذف الحساب، يتم حذف البيانات أو إخفاء هويتها ما لم يتطلب النظام الاحتفاظ بسجلات معينة لفترة محددة.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>حقوق المستخدم</h2>
          <p className={styles.paragraph}>
            يحق للمستخدم طلب الوصول إلى بياناته الشخصية أو تصحيحها أو طلب حذفها أو سحب موافقته على المعالجة متى ما كان ذلك ممكنًا نظاميًا. يمكن ممارسة هذه الحقوق من خلال التواصل مع التطبيق عبر القنوات الرسمية.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>نقل البيانات</h2>
          <p className={styles.paragraph}>
            قد تتم معالجة البيانات داخل المملكة العربية السعودية أو عبر مزودي خدمات تقنيين ملتزمين بمتطلبات حماية البيانات وفق النظام، مع اتخاذ التدابير اللازمة لضمان مستوى حماية مناسب.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>تحديث السياسة</h2>
          <p className={styles.paragraph}>
            يجوز للتطبيق تحديث سياسة الخصوصية عند الحاجة بما يتوافق مع التطورات النظامية أو التقنية، ويُعد استمرار استخدام التطبيق بعد نشر التحديث موافقة على النسخة المعدلة.
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.paragraph}>
            في حال وجود أي تعارض بين هذه السياسة وشروط الاستخدام، تسري الأحكام التي توفر حماية أكبر للبيانات الشخصية وفق النظام.
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default PrivacyPolicy
