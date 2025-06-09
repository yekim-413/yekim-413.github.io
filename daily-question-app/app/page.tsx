
'use client';

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const QUESTIONS = [
  "오늘 가장 감사한 일은 무엇이었나요?",
  "최근에 당신을 웃게 만든 일은 무엇인가요?",
  "요즘 가장 자주 드는 생각은 무엇인가요?",
  "지금 가장 필요하다고 느끼는 것은?",
  "최근에 당신이 내린 결정 중 가장 잘한 것은?"
];

export default function DailyQuestionApp() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [savedAnswers, setSavedAnswers] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("answers") || "{}");
    setSavedAnswers(saved);
    const today = new Date().toISOString().split("T")[0];
    const questionIndex = today.split("-").reduce((sum, v) => sum + Number(v), 0) % QUESTIONS.length;
    setIndex(questionIndex);
    setAnswer(saved[today] || "");
  }, []);

  const saveAnswer = () => {
    const today = new Date().toISOString().split("T")[0];
    const updated = { ...savedAnswers, [today]: answer };
    setSavedAnswers(updated);
    localStorage.setItem("answers", JSON.stringify(updated));
    alert("답변이 저장되었습니다!");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#fdfcfb] to-[#e2d1c3]">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">하루 한 질문</h1>
        <Card className="w-full max-w-lg shadow-2xl rounded-2xl">
          <CardContent className="p-6">
            <p className="text-lg font-medium text-gray-700 mb-4">{QUESTIONS[index]}</p>
            <Input
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="여기에 답변을 적어보세요..."
              className="mb-4 h-12"
            />
            <Button onClick={saveAnswer} className="w-full">저장하기</Button>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
