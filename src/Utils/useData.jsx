import { useEffect, useState } from "react";

export const useDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date()) //هو تحديث القيمة المخزنة في الحالة today باستخدام setDate لتكون القيمة الجديدة هي التاريخ والوقت الحالي.
        }, 60*1000) // يتم تعيين المؤقت(timer) = (60*1000 مللي ثانية)الذي يحدث التاريخ والقت كل دقيقة

        return () => {
            clearInterval(timer) //هنا يتم تنظيف المؤقت (timer) باستخدام clearInterval لتجنب تسريب الذاكرة
        }
    },[])

    const day = today.toLocaleDateString(locale, {weekday: 'long'}) //هذا الجزء من الكود يقوم بتنسيق اليوم كاملاً (مثل "الاثنين")
    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {month: 'long'})}\n\n`
    const time = today.toLocaleDateString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' })
     ///hour: 'numeric': يعرض الساعة بتنسيق رقمي (مثل "12" بدلاً من "صباحًا").
     //hour12: true: يحدد ما إذا كان التنسيق يستخدم الساعات المدونة بتنسيق 12 ساعة (صباحًا / مساءً) أو 24 ساعة.
     ///minute: 'numeric': يعرض الدقائق بتنسيق رقمي.
    return {
        date, time
    }
}