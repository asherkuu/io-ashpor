// 이미지 확장자 체크
export const isValidImageExtension = (e: string) => {
  const iType = ["jpg", "png", "jpeg"];

  if (!iType.includes(e)) {
    return {
      success: false,
      message: "이미지 확장자는 jpg, png, jpeg 중 업로드가 가능합니다.",
    };
  }
  return { success: true };
};
