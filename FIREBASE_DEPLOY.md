# دليل نشر المشروع على Firebase Hosting

## المتطلبات الأساسية

1. حساب Google (لإنشاء مشروع Firebase)
2. Node.js مثبت على الجهاز
3. Firebase CLI

## خطوات الإعداد والنشر

### 1. تثبيت Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. تسجيل الدخول إلى Firebase

```bash
firebase login
```

سيتم فتح المتصفح لتسجيل الدخول بحساب Google الخاص بك.

### 3. إنشاء مشروع Firebase (إذا لم يكن لديك مشروع)

1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. انقر على "إضافة مشروع" (Add Project)
3. أدخل اسم المشروع (مثلاً: khabeer-website)
4. اتبع التعليمات لإكمال إنشاء المشروع

### 4. تهيئة المشروع

```bash
firebase init hosting
```

عند تشغيل الأمر، اختر:
- استخدام مشروع موجود (Use an existing project) أو إنشاء مشروع جديد
- اختر المشروع الذي أنشأته
- **Public directory**: `dist` (هذا هو مجلد البناء الافتراضي لـ Vite)
- **Single-page app**: `Yes` (لأن المشروع يستخدم React Router)
- **Set up automatic builds**: `No` (يمكنك تفعيله لاحقاً)

### 5. تحديث معرف المشروع

افتح ملف `.firebaserc` واستبدل `your-project-id` بمعرف مشروع Firebase الفعلي.

### 6. بناء المشروع

```bash
npm run build
```

سيتم إنشاء مجلد `dist` يحتوي على الملفات الجاهزة للنشر.

### 7. نشر المشروع

```bash
npm run deploy
```

أو لنشر Hosting فقط:

```bash
npm run deploy:hosting
```

### 8. الوصول إلى الموقع

بعد النشر الناجح، ستحصل على رابط مثل:
```
https://your-project-id.web.app
```
أو
```
https://your-project-id.firebaseapp.com
```

## الأوامر المتاحة

- `npm run build` - بناء المشروع فقط
- `npm run deploy` - بناء المشروع ونشره على Firebase
- `npm run deploy:hosting` - بناء المشروع ونشر Hosting فقط

## ملاحظات مهمة

1. تأكد من تحديث `your-project-id` في ملف `.firebaserc` بمعرف مشروعك الفعلي
2. ملف `firebase.json` مُعد مسبقاً ليعمل مع Vite و React
3. جميع المسارات (routes) ستُعاد توجيهها إلى `index.html` لدعم React Router
4. مجلد `dist` موجود في `.gitignore` ولن يتم رفعه إلى Git

## استكشاف الأخطاء

إذا واجهت مشاكل:
- تأكد من تسجيل الدخول: `firebase login`
- تحقق من معرف المشروع في `.firebaserc`
- تأكد من بناء المشروع بنجاح قبل النشر
- راجع الأخطاء في Terminal
