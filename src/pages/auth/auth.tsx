"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
    style={{
      backgroundImage: "url('./koi2.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 rounded-2xl shadow-xl bg-white">
        {/* Toggle buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <Button
            variant={isLogin ? "default" : "outline"}
            onClick={() => setIsLogin(true)}
            className="w-32 rounded-xl"
          >
            Đăng Nhập
          </Button>
          <Button
            variant={!isLogin ? "default" : "outline"}
            onClick={() => setIsLogin(false)}
            className="w-32 rounded-xl"
          >
            Đăng Ký
          </Button>
        </div>

        {/* AnimatePresence để chuyển mượt */}
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="space-y-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Mật khẩu" />
                <Button className="w-full rounded-xl">Đăng Nhập</Button>
              </CardContent>
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <CardContent className="space-y-4">
                <Input type="text" placeholder="Tên của bạn" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Mật khẩu" />
                <Input type="password" placeholder="Xác nhận mật khẩu" />
                <Button className="w-full rounded-xl">Đăng Ký</Button>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
};

export default Auth;
