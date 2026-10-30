/**
 * BỘ DỮ LIỆU ĐỀ THI TIẾNG ANH - 3 UNITS HOÀN CHỈNH
 * Bao gồm đầy đủ bài đọc, câu hỏi, các lựa chọn A/B/C/D, đáp án đúng và lời giải chi tiết.
 */

const EXAM_DATA = {
    units: [
        {
            id: 1,
            unitCode: "UNIT 1",
            title: "LIFE STORIES WE ADMIRE",
            sections: [
                {
                    sectionId: "u1-lang",
                    title: "I. LANGUAGE",
                    parts: [
                        {
                            partId: "u1-p1",
                            title: "PART 1: Read the following announcement and choose the correct option (Questions 1 - 5)",
                            passage: `✨ <strong>SPECIAL TALK EVENT</strong> ✨<br><br>
Last Saturday, our university <strong>(1) _____</strong> an inspiring talk with Nick Vujicic, the world-famous motivational speaker. While he was sharing his life story, all the students were listening <strong>(2) _____</strong> and many of them were taking notes.<br><br>
Nick told us how he overcame challenges <strong>(3) _____</strong> arms and legs, and how he became a symbol of hope for millions. At the same time, the audience was smiling and was clapping because his words truly touched their hearts.<br><br>
The event created <strong>(4) _____</strong> memories and <strong>(5) _____</strong> us valuable lessons about courage and perseverance.<br><br>
👉 <em>Don't miss our next talk! Another world-renowned guest will be here at 7 p.m next Saturday. Stay tuned!</em>`,
                            questions: [
                                {
                                    id: 1,
                                    num: 1,
                                    type: "multiple-choice",
                                    questionText: "Question 1:",
                                    options: [
                                        { key: "A", text: "host" },
                                        { key: "B", text: "hosted" },
                                        { key: "C", text: "hosts" },
                                        { key: "D", text: "was hosting" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Trạng từ chỉ thời gian 'Last Saturday' (thứ Bảy tuần trước) là dấu hiệu của thì Quá khứ đơn (diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ)."
                                },
                                {
                                    id: 2,
                                    num: 2,
                                    type: "multiple-choice",
                                    questionText: "Question 2:",
                                    options: [
                                        { key: "A", text: "attentively" },
                                        { key: "B", text: "attentive" },
                                        { key: "C", text: "attention" },
                                        { key: "D", text: "attend" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Cần một trạng từ (adverb) đứng sau động từ thường 'were listening' để bổ nghĩa cho hành động lắng nghe. 'Attentively' nghĩa là 'một cách chăm chú' (attentive: tính từ; attention: danh từ; attend: động từ)."
                                },
                                {
                                    id: 3,
                                    num: 3,
                                    type: "multiple-choice",
                                    questionText: "Question 3:",
                                    options: [
                                        { key: "A", text: "with" },
                                        { key: "B", text: "in" },
                                        { key: "C", text: "without" },
                                        { key: "D", text: "of" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Dựa vào kiến thức thực tế và ngữ cảnh về diễn giả Nick Vujicic (người vượt qua nghịch cảnh khi không có cả tay lẫn chân), ta chọn giới từ 'without' (không có)."
                                },
                                {
                                    id: 4,
                                    num: 4,
                                    type: "multiple-choice",
                                    questionText: "Question 4:",
                                    options: [
                                        { key: "A", text: "forgettable" },
                                        { key: "B", text: "unforget" },
                                        { key: "C", text: "unforgettable" },
                                        { key: "D", text: "forget" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Trước danh từ 'memories' (kỷ niệm) cần một tính từ. Dựa vào ngữ cảnh buổi nói chuyện truyền cảm hứng chạm đến trái tim người nghe, ta chọn tính từ mang nghĩa tích cực là 'unforgettable' (đáng nhớ / không thể nào quên)."
                                },
                                {
                                    id: 5,
                                    num: 5,
                                    type: "multiple-choice",
                                    questionText: "Question 5:",
                                    options: [
                                        { key: "A", text: "give" },
                                        { key: "B", text: "given" },
                                        { key: "C", text: "was giving" },
                                        { key: "D", text: "gave" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Liên từ 'and' nối hai động từ cùng thì. Phía trước là động từ ở thì Quá khứ đơn ('created') nên chỗ trống cũng phải chia ở thì Quá khứ đơn là 'gave'."
                                }
                            ]
                        },
                        {
                            partId: "u1-p2",
                            title: "PART 2: Read the following passage and choose the correct option (Questions 6 - 10)",
                            passage: `Helen Keller was born in Alabama in 1880. When she was only 19 months old, she <strong>(6) _____</strong> a severe illness that left her both blind and deaf. Her parents felt <strong>(7) _____</strong>, but they never gave up.<br><br>
In 1887, Anne Sullivan, a young teacher, came to help Helen. At first, it was very difficult because Helen didn't understand what Anne was trying to teach her. <strong>(8) _____</strong>, one day, while Anne <strong>(9) _____</strong> Helen's hand under the water pump, Helen suddenly understood the connection between <strong>(10) _____</strong> word "water" and the cool liquid flowing over her hand. That moment changed her life forever.`,
                            questions: [
                                {
                                    id: 6,
                                    num: 6,
                                    type: "multiple-choice",
                                    questionText: "Question 6:",
                                    options: [
                                        { key: "A", text: "catches" },
                                        { key: "B", text: "caught" },
                                        { key: "C", text: "was catching" },
                                        { key: "D", text: "catch" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Mệnh đề chỉ thời gian trong quá khứ 'When she was only 19 months old' đòi hỏi mệnh đề chính chia ở thì Quá khứ đơn. Cụm từ 'catch an illness' (mắc bệnh) chuyển về quá khứ là 'caught'."
                                },
                                {
                                    id: 7,
                                    num: 7,
                                    type: "multiple-choice",
                                    questionText: "Question 7:",
                                    options: [
                                        { key: "A", text: "hope" },
                                        { key: "B", text: "hopefully" },
                                        { key: "C", text: "hopelessly" },
                                        { key: "D", text: "hopeless" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Sau động từ nối (linking verb) 'felt' cần một tính từ. Vì Helen Keller bị cả mù và điếc nên bố mẹ cô cảm thấy 'tuyệt vọng' (hopeless), đối lập với vế sau 'but they never gave up' (nhưng họ không bao giờ từ bỏ)."
                                },
                                {
                                    id: 8,
                                    num: 8,
                                    type: "multiple-choice",
                                    questionText: "Question 8:",
                                    options: [
                                        { key: "A", text: "However" },
                                        { key: "B", text: "Therefore" },
                                        { key: "C", text: "In addition" },
                                        { key: "D", text: "In spite of" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Câu trước nói lúc đầu việc dạy rất khó khăn ('very difficult'), câu sau nói một ngày nọ Helen đột nhiên hiểu ra ('suddenly understood'). Hai câu mang ý tương phản và từ nối đứng đầu câu trước dấu phẩy nên dùng 'However' (Tuy nhiên)."
                                },
                                {
                                    id: 9,
                                    num: 9,
                                    type: "multiple-choice",
                                    questionText: "Question 9:",
                                    options: [
                                        { key: "A", text: "puts" },
                                        { key: "B", text: "put" },
                                        { key: "C", text: "was putting" },
                                        { key: "D", text: "had put" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Cấu trúc phối hợp thì Quá khứ tiếp diễn và Quá khứ đơn: Hành động đang diễn ra (sau 'while' chia Quá khứ tiếp diễn: 'was putting') thì có một hành động khác bất ngờ xen vào (chia Quá khứ đơn: 'Helen suddenly understood')."
                                },
                                {
                                    id: 10,
                                    num: 10,
                                    type: "multiple-choice",
                                    questionText: "Question 10:",
                                    options: [
                                        { key: "A", text: "a" },
                                        { key: "B", text: "the" },
                                        { key: "C", text: "an" },
                                        { key: "D", text: "Ø" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Danh từ 'word' đã được xác định cụ thể ngay phía sau là từ 'water' nên ta dùng mạo từ xác định 'the'."
                                }
                            ]
                        }
                    ]
                },
                {
                    sectionId: "u1-read",
                    title: "II. READING",
                    parts: [
                        {
                            partId: "u1-read-p1",
                            title: "PART 1: Read the passage and choose the correct sentence for each blank (Questions 11 - 15)",
                            passage: `Stories of inspiring lives have the power to shape the way we think and act. They remind us that success is not only about personal gain but also about the impact we leave on others. <strong>(11) _____</strong>. These stories give us valuable lessons about perseverance, kindness, and the strength of the human spirit.<br><br>
One example is the life of Helen Keller, who overcame the challenges of being both blind and deaf. <strong>(12) _____</strong>. Her determination to learn and communicate inspired millions of people worldwide.<br><br>
<strong>(13) _____</strong>. He is remembered for his leadership in the fight against apartheid. Despite spending 27 years in prison, he worked to unite his country and promote peace.<br><br>
Everyday heroes also deserve admiration. <strong>(14) _____</strong>. Their stories show us that heroism is not limited to famous leaders but can be found in ordinary people.<br><br>
In the end, the life stories we admire encourage us to reflect on our own paths. They inspire us to make choices that reflect our deepest values. <strong>(15) _____</strong>, we can strive to live with greater purpose and compassion.`,
                            questions: [
                                {
                                    id: 11,
                                    num: 11,
                                    type: "multiple-choice",
                                    questionText: "Question 11:",
                                    options: [
                                        { key: "A", text: "Inspiring life stories are often forgotten quickly." },
                                        { key: "B", text: "We admire people only when they are rich and powerful." },
                                        { key: "C", text: "Life stories we admire can motivate us to become better individuals." },
                                        { key: "D", text: "Everyone's life story is the same and unremarkable." }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Đoạn 1 đang bàn về sức mạnh tích cực của những câu chuyện truyền cảm hứng giúp định hình suy nghĩ, hành động. Phương án C liên kết mạch lạc nhất với câu trước và câu sau ('These stories give us valuable lessons...')."
                                },
                                {
                                    id: 12,
                                    num: 12,
                                    type: "multiple-choice",
                                    questionText: "Question 12:",
                                    options: [
                                        { key: "A", text: "She proved that disabilities cannot prevent people from achieving greatness." },
                                        { key: "B", text: "She became famous only because of her teachers." },
                                        { key: "C", text: "She chose to live a quiet and hidden life." },
                                        { key: "D", text: "She never inspired anyone outside her own family." }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Câu trước giới thiệu Helen Keller vượt qua thử thách mù và điếc, câu sau nhấn mạnh quyết tâm truyền cảm hứng cho hàng triệu người. Phương án A (Bà đã chứng minh rằng khuyết tật không thể ngăn cản con người đạt đến sự vĩ đại) làm rõ thành tựu của bà."
                                },
                                {
                                    id: 13,
                                    num: 13,
                                    type: "multiple-choice",
                                    questionText: "Question 13:",
                                    options: [
                                        { key: "A", text: "Nelson Mandela is a remarkable figure" },
                                        { key: "B", text: "But Nelson Mandela is another man" },
                                        { key: "C", text: "Another remarkable figure is Nelson Mandela" },
                                        { key: "D", text: "Finally is Nelson Mandela" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Đoạn 3 chuyển sang tấm gương thứ hai sau Helen Keller. Câu liền sau dùng đại từ nhân xưng 'He' và nhắc đến cuộc đấu tranh chống phân biệt chủng tộc apartheid. Phương án C giới thiệu nhân vật chuẩn xác về ngữ pháp và liên kết câu."
                                },
                                {
                                    id: 14,
                                    num: 14,
                                    type: "multiple-choice",
                                    questionText: "Question 14:",
                                    options: [
                                        { key: "A", text: "Only celebrities can be considered heroes." },
                                        { key: "B", text: "They often refuse to help their communities." },
                                        { key: "C", text: "Their actions usually go unnoticed and unappreciated." },
                                        { key: "D", text: "Many of them risk their lives to save others in times of crisis." }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Câu đầu đoạn 4 mở đầu về 'Everyday heroes' (những người hùng đời thường). Phương án D giải thích tại sao họ đáng được ngưỡng mộ: nhiều người sẵn sàng liều mình cứu người khác trong lúc hiểm nguy."
                                },
                                {
                                    id: 15,
                                    num: 15,
                                    type: "multiple-choice",
                                    questionText: "Question 15:",
                                    options: [
                                        { key: "A", text: "Because they follow their example" },
                                        { key: "B", text: "By following their example" },
                                        { key: "C", text: "However we follow their example" },
                                        { key: "D", text: "Although we follow their example" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Chỗ trống đứng trước dấu phẩy và mệnh đề chính 'we can strive to live...'. Cần một cụm giới từ chỉ phương thức (By + V-ing: Bằng cách noi gương họ). Các phương án A, C, D đều sai về mặt ngữ pháp hoặc logic liên kết."
                                }
                            ]
                        },
                        {
                            partId: "u1-read-p2",
                            title: "PART 2: Read the passage about Sylvia Earle and answer Questions 16 - 22",
                            passage: `Sylvia Earle is an underwater explorer and marine biologist who was born in the USA in 1935. She became interested in the world's oceans from an early age. As a child, she liked to stand on the beach for hours and look at the sea, wondering what it must be like under the surface.<br><br>
When she was 16, she finally got a chance to make her first dive, which motivated her to become an underwater explorer. Since then, she has spent more than 6,500 hours under water, and has led more than seventy expeditions worldwide. She has also made the deepest dive ever, reaching a record – breaking depth of 381 metres.<br><br>
In 1970, she became famous around the world when she became the caption of the first all-female team to live under water. The team spent two weeks in an underwater "house". The research they carried out showed the damage that pollution was causing to marine life, and especially to coral reefs. Her team also studied the problem of over-fishing. Fishing methods meant that people were catching too many fish, Earle warned, and many species were in danger of becoming extinct.<br><br>
Since then she has written several books and magazine articles in which she suggests ways of reducing the damage that is being done to the world's oceans. One way, she believes, is to build fish farms for seafood, and reduce the amount of fishing that is done out at sea. Although she no longer eats seafood herself, she realizes the importance it plays in our diets, It would be wrong to tell people they should stop eating fish from the sea, she says. However, they need to reduce the impact they are having on the ocean's supplies.`,
                            questions: [
                                {
                                    id: 16,
                                    num: 16,
                                    type: "multiple-choice",
                                    questionText: "Question 16: Which best serves as the title for the passage?",
                                    options: [
                                        { key: "A", text: "A new book on coral reefs" },
                                        { key: "B", text: "Sylvia Earle, first female diver" },
                                        { key: "C", text: "Sylvia Earle, an underwater hero" },
                                        { key: "D", text: "A study on marine species" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Toàn bài đọc ca ngợi cuộc đời, niềm say mê thám hiểm đại dương và các cống hiến bảo vệ biển cả của Sylvia Earle. Tiêu đề phù hợp và bao quát nhất là 'Sylvia Earle, an underwater hero' (Sylvia Earle, người hùng dưới đại dương)."
                                },
                                {
                                    id: 17,
                                    num: 17,
                                    type: "multiple-choice",
                                    questionText: "Question 17: The word 'motivated' in paragraph 2 is OPPOSITE in meaning to:",
                                    options: [
                                        { key: "A", text: "approved" },
                                        { key: "B", text: "frightened" },
                                        { key: "C", text: "inspired" },
                                        { key: "D", text: "discouraged" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "'Motivated' nghĩa là 'thôi thúc, tạo động lực'. Từ trái nghĩa là 'discouraged' (làm nản lòng, làm nhụt chí)."
                                },
                                {
                                    id: 18,
                                    num: 18,
                                    type: "multiple-choice",
                                    questionText: "Question 18: Which paragraph mentions things she did when she became a leader?",
                                    options: [
                                        { key: "A", text: "Paragraph 1" },
                                        { key: "B", text: "Paragraph 2" },
                                        { key: "C", text: "Paragraph 3" },
                                        { key: "D", text: "Paragraph 4" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Đoạn 3 đề cập đến việc bà trở thành đội trưởng (captain/caption) dẫn dắt đội thám hiểm nữ đầu tiên sống dưới nước trong 2 tuần và nghiên cứu ô nhiễm biển."
                                },
                                {
                                    id: 19,
                                    num: 19,
                                    type: "multiple-choice",
                                    questionText: "Question 19: The word 'it' in the last paragraph refers to:",
                                    options: [
                                        { key: "A", text: "seafood" },
                                        { key: "B", text: "the importance" },
                                        { key: "C", text: "sea" },
                                        { key: "D", text: "fish" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Trong câu: 'Although she no longer eats seafood herself, she realizes the importance it plays in our diets', từ 'it' thay thế cho danh từ 'seafood' (hải sản) đứng ngay phía trước."
                                },
                                {
                                    id: 20,
                                    num: 20,
                                    type: "multiple-choice",
                                    questionText: "Question 20: According to the passage, which of the following is NOT mentioned in the passage as Earle's role?",
                                    options: [
                                        { key: "A", text: "teacher" },
                                        { key: "B", text: "explorer" },
                                        { key: "C", text: "biologist" },
                                        { key: "D", text: "researcher" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Bài đọc đề cập đến bà với tư cách: explorer (nhà thám hiểm), biologist (nhà sinh vật học), researcher (nhà nghiên cứu), nhưng KHÔNG hề nhắc đến vai trò giáo viên (teacher)."
                                },
                                {
                                    id: 21,
                                    num: 21,
                                    type: "multiple-choice",
                                    questionText: "Question 21: Which of the following is TRUE according to paragraph 4?",
                                    options: [
                                        { key: "A", text: "More books about the world's oceans should be written" },
                                        { key: "B", text: "Seafood is not important to human diets" },
                                        { key: "C", text: "Fish farms increase the damage done to the oceans" },
                                        { key: "D", text: "It is a good idea to reduce fishing at sea" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Thông tin trong đoạn 4: 'One way, she believes, is to build fish farms for seafood, and reduce the amount of fishing that is done out at sea.' Do đó phương án D (Giảm đánh bắt cá ngoài biển là một ý tưởng hay) là chính xác."
                                },
                                {
                                    id: 22,
                                    num: 22,
                                    type: "multiple-choice",
                                    questionText: "Question 22: According to the passage, what did Sylvia Earle and her team study during their two weeks living under water?",
                                    options: [
                                        { key: "A", text: "The effects of deep-sea diving on human health" },
                                        { key: "B", text: "The damage caused by pollution and over-fishing to marine life" },
                                        { key: "C", text: "New methods of building underwater houses" },
                                        { key: "D", text: "The benefits of eating seafood" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Thông tin ở đoạn 3: 'The research they carried out showed the damage that pollution was causing to marine life, and especially to coral reefs. Her team also studied the problem of over-fishing.'"
                                }
                            ]
                        }
                    ]
                },
                {
                    sectionId: "u1-write",
                    title: "III. WRITING",
                    parts: [
                        {
                            partId: "u1-write-p1",
                            title: "PART 1: Sentence Arrangement (Questions 23 - 24)",
                            questions: [
                                {
                                    id: 23,
                                    num: 23,
                                    type: "multiple-choice",
                                    questionText: `Question 23: Arrange the sentences to make a meaningful email:<br>
<div class="arrange-box">
<em>Hi Lisa,</em><br>
<strong>a.</strong> I'm looking forward to our next gathering. Let me know when you're free.<br>
<strong>b.</strong> Also, the decorations and food were amazing! Did you make the cake yourself?<br>
<strong>c.</strong> I really enjoyed meeting your friends and spending time with everyone.<br>
<strong>d.</strong> Hope you had as much fun as I did!<br>
<strong>e.</strong> Thanks for inviting me to your birthday party. It was so much fun!<br>
<em>Best, Mia</em>
</div>`,
                                    options: [
                                        { key: "A", text: "a – c – b – e – d" },
                                        { key: "B", text: "a – b – c – e – d" },
                                        { key: "C", text: "d – e – a – b – c" },
                                        { key: "D", text: "e – c – b – d – a" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Trình tự hợp lý của bức thư cảm ơn: (e) Cảm ơn vì đã mời đến tiệc sinh nhật -> (c) Bày tỏ niềm vui khi gặp gỡ bạn bè -> (b) Khen ngợi thức ăn và trang trí tiệc -> (d) Chúc Lisa cũng có nhiều niềm vui -> (a) Hẹn gặp lại vào lần sau."
                                },
                                {
                                    id: 24,
                                    num: 24,
                                    type: "multiple-choice",
                                    questionText: `Question 24: Arrange the sentences to make a meaningful text:<br>
<div class="arrange-box">
<strong>a.</strong> Arnel didn't make much money this way, but he never gave up on his passion.<br>
<strong>b.</strong> In 1982, at the age of fifteen, he joined a local band as a lead singer, singing pop songs by famous bands.<br>
<strong>c.</strong> He has been passionate about singing since he was five years old and has achieved great success as a professional singer.<br>
<strong>d.</strong> Arnel Pineda was born in Sampaloc, Manila, the Philippines in 1967, and he is an inspiring person.<br>
<strong>e.</strong> Arnel's success shows that anyone can achieve their dreams if they try hard enough.
</div>`,
                                    options: [
                                        { key: "A", text: "d – c – b – a – e" },
                                        { key: "B", text: "a – b – c – d – e" },
                                        { key: "C", text: "b – c – d – a – e" },
                                        { key: "D", text: "c – a – d – b – e" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Trình tự dòng thời gian và lập luận: (d) Giới thiệu Arnel Pineda (năm sinh 1967) -> (c) Đam mê ca hát từ năm 5 tuổi -> (b) Năm 1982 (15 tuổi) tham gia ban nhạc địa phương -> (a) Hát như vậy ('this way') không kiếm được nhiều tiền nhưng không bỏ cuộc -> (e) Bài học truyền cảm hứng từ thành công."
                                }
                            ]
                        },
                        {
                            partId: "u1-write-p2",
                            title: "PART 2: Sentence Transformation (Questions 25 - 28)",
                            questions: [
                                {
                                    id: 25,
                                    num: 25,
                                    type: "sentence-rewrite",
                                    originalSentence: "During her trip to London, Linda took many beautiful photos.",
                                    promptText: "While Linda",
                                    sampleAnswer: "While Linda was travelling to London, she took many beautiful photos.",
                                    acceptableAnswers: [
                                        "While Linda was travelling to London, she took many beautiful photos.",
                                        "While Linda was traveling to London, she took many beautiful photos.",
                                        "While Linda was visiting London, she took many beautiful photos.",
                                        "While Linda was on her trip to London, she took many beautiful photos."
                                    ],
                                    explanation: "Chuyển từ cụm giới từ 'During + N' sang mệnh đề thời gian 'While + S + was/were + V-ing' để diễn tả hành động kéo dài làm nền trong quá khứ."
                                },
                                {
                                    id: 26,
                                    num: 26,
                                    type: "sentence-rewrite",
                                    originalSentence: "He arrived home in the middle of his parents' dinner.",
                                    promptText: "When he",
                                    sampleAnswer: "When he arrived home, his parents were having dinner.",
                                    acceptableAnswers: [
                                        "When he arrived home, his parents were having dinner.",
                                        "When he arrived home, his parents were having their dinner."
                                    ],
                                    explanation: "'In the middle of his parents' dinner' nghĩa là bố mẹ đang ăn tối (Quá khứ tiếp diễn: were having dinner) thì anh ấy về nhà (Quá khứ đơn: arrived home)."
                                },
                                {
                                    id: 27,
                                    num: 27,
                                    type: "sentence-rewrite",
                                    originalSentence: "During our visit to the museum, we learned a lot about Vietnamese history.",
                                    promptText: "While we",
                                    sampleAnswer: "While we were visiting the museum, we learned a lot about Vietnamese history.",
                                    acceptableAnswers: [
                                        "While we were visiting the museum, we learned a lot about Vietnamese history."
                                    ],
                                    explanation: "Chuyển 'During our visit to...' thành mệnh đề Quá khứ tiếp diễn 'While we were visiting the museum, ...'."
                                },
                                {
                                    id: 28,
                                    num: 28,
                                    type: "sentence-rewrite",
                                    originalSentence: "My father didn't finish secondary school because of the war.",
                                    promptText: "My father dropped",
                                    sampleAnswer: "My father dropped out of secondary school because of the war.",
                                    acceptableAnswers: [
                                        "My father dropped out of secondary school because of the war."
                                    ],
                                    explanation: "Cụm động từ 'drop out of school' mang nghĩa 'bỏ học giữa chừng', đồng nghĩa với 'not finish school'."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            unitCode: "UNIT 2",
            title: "A MULTICULTURAL WORLD",
            sections: [
                {
                    sectionId: "u2-lang",
                    title: "I. LANGUAGE",
                    parts: [
                        {
                            partId: "u2-p1",
                            title: "PART 1: Read the festival announcement and choose the correct option (Questions 1 - 5)",
                            passage: `<strong>SPLASH INTO SONGKRAN—THE EXCITING WATER FESTIVAL</strong><br><br>
Songkran, Thailand's biggest water festival, <strong>(1) _____</strong> every April.<br><br>
It's a time of fun with religion. During Songkran, <strong>(2) _____</strong> where Thai New Year and water fights! Streets round the fun. Songkran is everyone at the heart and has a great time. Beginners. They visit temples, rather than the Thai honour their Buddha statues <strong>(3) _____</strong> good luck and pour water over all sides of traditional music, and luck. You can enjoy delicious Thai food, <strong>(4) _____</strong> to traditional music, and watch <strong>(5) _____</strong> dance. Whether you want to have fun or learn about Thai culture, Songkran offers something for everyone.<br><br>
Come and experience this unforgettable festival!`,
                            questions: [
                                {
                                    id: 101,
                                    num: 1,
                                    type: "multiple-choice",
                                    questionText: "Question 1:",
                                    options: [
                                        { key: "A", text: "celebrate" },
                                        { key: "B", text: "celebrated" },
                                        { key: "C", text: "is celebrated" },
                                        { key: "D", text: "is celebrating" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Chủ ngữ 'Songkran' là sự vật chịu tác động của hành động tổ chức, kết hợp với trạng từ 'every April' (thì Hiện tại đơn) -> câu bị động: 'is celebrated'."
                                },
                                {
                                    id: 102,
                                    num: 2,
                                    type: "multiple-choice",
                                    questionText: "Question 2:",
                                    options: [
                                        { key: "A", text: "lively water fights" },
                                        { key: "B", text: "water lively fights" },
                                        { key: "C", text: "fight lively water" },
                                        { key: "D", text: "fight water lively" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Trật tự cụm danh từ: Tính từ chỉ tính chất ('lively': sôi động) + danh từ phụ ('water') + danh từ chính ('fights') -> 'lively water fights'."
                                },
                                {
                                    id: 103,
                                    num: 3,
                                    type: "multiple-choice",
                                    questionText: "Question 3:",
                                    options: [
                                        { key: "A", text: "bring" },
                                        { key: "B", text: "bringing" },
                                        { key: "C", text: "brought" },
                                        { key: "D", text: "to bring" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Dùng to-infinitive ('to bring') để chỉ mục đích của hành động phía trước (tắm tượng Phật để mang lại may mắn)."
                                },
                                {
                                    id: 104,
                                    num: 4,
                                    type: "multiple-choice",
                                    questionText: "Question 4:",
                                    options: [
                                        { key: "A", text: "listening" },
                                        { key: "B", text: "listen" },
                                        { key: "C", text: "to listen" },
                                        { key: "D", text: "listens" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Cấu trúc song song sau động từ khiếm khuyết 'can': enjoy..., listen..., and watch... đều ở dạng nguyên mẫu không to."
                                },
                                {
                                    id: 105,
                                    num: 5,
                                    type: "multiple-choice",
                                    questionText: "Question 5:",
                                    options: [
                                        { key: "A", text: "fascinate" },
                                        { key: "B", text: "fascination" },
                                        { key: "C", text: "fascinating" },
                                        { key: "D", text: "fascinated" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Trước danh từ 'dance' cần tính từ mô tả đặc điểm của điệu múa (lôi cuốn, hấp dẫn) -> dùng tính từ đuôi -ing: 'fascinating'."
                                }
                            ]
                        },
                        {
                            partId: "u2-p2",
                            title: "PART 2: Read the cultural brochure and choose the correct option (Questions 6 - 10)",
                            passage: `<em>(Adapted from I Learn Smart World)</em><br><br>
<strong>(6) _____</strong> International Cultural Festival is being held in Hanoi this Saturday, January 13. It's a <strong>(7) _____</strong> event which features many cultures, ranging from Korean, Japanese, British and Vietnamese. If you are a big fan of kimchi, sushi or bun cha, this festival is perfectly for you. We will serve you traditional dishes of these cultures. <strong>(8) _____</strong>, you will have the opportunity to meet T-Ara - a famous Kpop group <strong>(9) _____</strong> will be at the Korean booth. Apart from serving delicious dishes, these booths will also sell <strong>(10) _____</strong> so that you can take home some.<br><br>
To book a ticket, call us at 0459875180 or visit our website www.interculfestival.com.`,
                            questions: [
                                {
                                    id: 106,
                                    num: 6,
                                    type: "multiple-choice",
                                    questionText: "Question 6:",
                                    options: [
                                        { key: "A", text: "Ø" },
                                        { key: "B", text: "The" },
                                        { key: "C", text: "A" },
                                        { key: "D", text: "An" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Tên một lễ hội, sự kiện cụ thể ('International Cultural Festival') sử dụng mạo từ xác định 'The'."
                                },
                                {
                                    id: 107,
                                    num: 7,
                                    type: "multiple-choice",
                                    questionText: "Question 7:",
                                    options: [
                                        { key: "A", text: "popular" },
                                        { key: "B", text: "popularity" },
                                        { key: "C", text: "popularly" },
                                        { key: "D", text: "popularise" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Đứng sau mạo từ 'a' và trước danh từ 'event' cần một tính từ -> 'popular' (phổ biến, được yêu thích)."
                                },
                                {
                                    id: 108,
                                    num: 8,
                                    type: "multiple-choice",
                                    questionText: "Question 8:",
                                    options: [
                                        { key: "A", text: "However" },
                                        { key: "B", text: "Therefore" },
                                        { key: "C", text: "Moreover" },
                                        { key: "D", text: "For example" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Bổ sung thêm một thông tin hấp dẫn (cơ hội gặp nhóm nhạc T-Ara) bên cạnh việc thưởng thức đồ ăn -> dùng 'Moreover' (Hơn nữa, ngoài ra)."
                                },
                                {
                                    id: 109,
                                    num: 9,
                                    type: "multiple-choice",
                                    questionText: "Question 9:",
                                    options: [
                                        { key: "A", text: "whose" },
                                        { key: "B", text: "whom" },
                                        { key: "C", text: "who" },
                                        { key: "D", text: "why" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Đại từ quan hệ thay thế cho danh từ chỉ người ('a famous Kpop group') làm chủ ngữ cho động từ 'will be' -> dùng 'who'."
                                },
                                {
                                    id: 110,
                                    num: 10,
                                    type: "multiple-choice",
                                    questionText: "Question 10:",
                                    options: [
                                        { key: "A", text: "customs" },
                                        { key: "B", text: "souvenirs" },
                                        { key: "C", text: "festivities" },
                                        { key: "D", text: "origins" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Theo ngữ cảnh các gian hàng bán vật phẩm để khách đem về nhà ('take home some') -> chọn 'souvenirs' (đồ lưu niệm)."
                                }
                            ]
                        }
                    ]
                },
                {
                    sectionId: "u2-read",
                    title: "II. READING",
                    parts: [
                        {
                            partId: "u2-read-p1",
                            title: "PART 1: Cultural exchange programs (Questions 11 - 15)",
                            passage: `<em>(Adapted from I Learn Smart World)</em><br><br>
Cultural exchange programs have many benefits for individuals, communities, and the world. These programs aim <strong>(11) _____</strong> for participants.<br><br>
Working in a new cultural environment helps develop various soft skills like adaptability, organization, problem-solving, and self-confidence. <strong>(12) _____</strong> a valuable learning opportunity that participants can use long after the program ends. Therefore, cultural exchange is an excellent way for young people to grow professionally and improve their career prospects. Future employers often view international experience positively, giving individuals <strong>(13) _____</strong>.<br><br>
Engaging with people from different cultures provides an eye-opening experience as it exposes individuals to different norms and values. This experience can significantly shape personal and professional growth. <strong>(14) _____</strong> helps develop a broader view, known as intercultural competence. Intercultural competence not only fosters empathy and understanding but also uncovers aspects of one's own culture that were previously unknown.<br><br>
Cultural exchange programs offer a unique way to travel, distinct from typical tourist experiences. These programs provide a deeper understanding of other countries and cultures, allowing participants to live like locals. Experiencing community-based travel, with its hidden gems, undiscovered streets, and delicious homemade meals, <strong>(15) _____</strong> how they engage with different cultures, leading them to vow never to travel like tourists again.`,
                            questions: [
                                {
                                    id: 111,
                                    num: 11,
                                    type: "multiple-choice",
                                    questionText: "Question 11:",
                                    options: [
                                        { key: "A", text: "providing learning opportunities" },
                                        { key: "B", text: "to provide learning opportunities" },
                                        { key: "C", text: "learning to provide opportunities" },
                                        { key: "D", text: "to learn providing opportunities" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Cấu trúc 'aim + to-V' (nhằm mục đích làm gì) -> 'aim to provide learning opportunities'."
                                },
                                {
                                    id: 112,
                                    num: 12,
                                    type: "multiple-choice",
                                    questionText: "Question 12:",
                                    options: [
                                        { key: "A", text: "Those experiences are" },
                                        { key: "B", text: "Those experience is" },
                                        { key: "C", text: "This experience is" },
                                        { key: "D", text: "These experiences are" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Bổ ngữ phía sau là cụm danh từ số ít 'a valuable learning opportunity' nên chủ ngữ và to-be phải là số ít -> 'This experience is'."
                                },
                                {
                                    id: 113,
                                    num: 13,
                                    type: "multiple-choice",
                                    questionText: "Question 13:",
                                    options: [
                                        { key: "A", text: "an advantage in today's competitive job market" },
                                        { key: "B", text: "the today advantage of competitive job market" },
                                        { key: "C", text: "a competitive advantage toward today's job market" },
                                        { key: "D", text: "the today's job market with competitive advantage" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Cấu trúc: 'give somebody an advantage in something' (mang lại cho ai lợi thế trong môi trường nào đó)."
                                },
                                {
                                    id: 114,
                                    num: 14,
                                    type: "multiple-choice",
                                    questionText: "Question 14:",
                                    options: [
                                        { key: "A", text: "Involve oneself in another culture" },
                                        { key: "B", text: "To be involving oneself in another culture" },
                                        { key: "C", text: "Involving oneself in another culture" },
                                        { key: "D", text: "Be involved oneself in another culture" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Chỗ trống làm chủ ngữ cho động từ chia số ít 'helps' phía sau nên dùng danh động từ (Gerund V-ing): 'Involving oneself in another culture'."
                                },
                                {
                                    id: 115,
                                    num: 15,
                                    type: "multiple-choice",
                                    questionText: "Question 15:",
                                    options: [
                                        { key: "A", text: "encourages individuals reconsider" },
                                        { key: "B", text: "encouraging individuals to reconsider" },
                                        { key: "C", text: "to encourage individuals to reconsider" },
                                        { key: "D", text: "encourages individuals to reconsider" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Chủ ngữ là danh động từ 'Experiencing community-based travel' (ngôi thứ 3 số ít), câu cần vị ngữ chính chia ở hiện tại đơn + cấu trúc 'encourage sb to-V' -> 'encourages individuals to reconsider'."
                                }
                            ]
                        },
                        {
                            partId: "u2-read-p2",
                            title: "PART 2: Embracing Diversity in a Multicultural World (Questions 16 - 22)",
                            passage: `<em>(Adapted from https://www.campaignasia.com)</em><br><br>
In today's globalized society, experiencing a multicultural world has become increasingly common. Cities like New York, London, and Sydney are melting pots where various cultures coexist and interact. This diversity enriches communities by bringing together different perspectives, traditions, and customs. People from different backgrounds contribute to the vibrant cultural tapestry of these cities, creating a unique and dynamic environment.<br><br>
One of the benefits of living in a multicultural world is the opportunity to learn from others. People can explore new cuisines, languages, and festivals, which broadens their understanding and appreciation of different cultures. For instance, Chinese New Year, Diwali, and Ramadan are celebrated by people of all backgrounds, fostering a sense of unity and mutual respect. Moreover, multicultural societies often stimulate creativity and innovation, as the blending of diverse ideas can lead to new solutions and advancements in various fields.<br><br>
However, navigating a multicultural environment also presents challenges. Misunderstandings and cultural clashes can arise, requiring individuals to be open-minded and empathetic. It's essential to engage in open dialogue and educate oneself about other cultures to minimize conflicts and build harmonious relationships. Additionally, there can be issues related to integration and inclusion, where some groups may feel marginalized or excluded from mainstream society. Addressing these issues requires concerted efforts from governments, communities, and individuals to promote equality and social cohesion.<br><br>
Educational institutions play a crucial role in promoting multicultural understanding. Schools and universities can incorporate multicultural education into their curricula, teaching students about the history, values, and traditions of different cultures. This not only enhances students' cultural awareness but also prepares them to thrive in a diverse world. Furthermore, extracurricular activities such as cultural exchange programs and international student organizations provide practical experiences for students to engage with peers from different backgrounds.<br><br>
Ultimately, the multicultural world we live in offers a unique chance to grow and learn. By embracing diversity, we can create more inclusive and vibrant communities, where everyone feels valued and respected. While challenges exist, the benefits of multiculturalism far outweigh the difficulties, paving the way for a more interconnected and harmonious global society.`,
                            questions: [
                                {
                                    id: 116,
                                    num: 16,
                                    type: "multiple-choice",
                                    questionText: "Question 16: Which best serves as the title for the passage?",
                                    options: [
                                        { key: "A", text: "The Benefits of Cultural Homogeneity" },
                                        { key: "B", text: "Challenges of a Multicultural Society" },
                                        { key: "C", text: "Embracing Diversity in a Multicultural World" },
                                        { key: "D", text: "The History of Globalization" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Bài đọc phân tích từ bức tranh đa văn hóa, lợi ích, thách thức đến giải pháp đón nhận đa dạng văn hóa ('Embracing Diversity in a Multicultural World')."
                                },
                                {
                                    id: 117,
                                    num: 17,
                                    type: "multiple-choice",
                                    questionText: "Question 17: The word 'enriches' in paragraph 1 is closest in meaning to:",
                                    options: [
                                        { key: "A", text: "weakens" },
                                        { key: "B", text: "complicates" },
                                        { key: "C", text: "improves" },
                                        { key: "D", text: "restricts" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "'Enriches' có nghĩa là 'làm giàu thêm, làm phong phú, nâng cao giá trị', gần nghĩa nhất với 'improves' (cải thiện, làm tốt hơn)."
                                },
                                {
                                    id: 118,
                                    num: 18,
                                    type: "multiple-choice",
                                    questionText: "Question 18: The word 'these' in paragraph 1 refers to:",
                                    options: [
                                        { key: "A", text: "different perspectives, traditions, and customs" },
                                        { key: "B", text: "cities like New York, London, and Sydney" },
                                        { key: "C", text: "various cultures" },
                                        { key: "D", text: "multicultural communities" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "'...the vibrant cultural tapestry of these cities' -> 'these' quy chiếu về các thành phố New York, London, Sydney được nhắc ở câu trước."
                                },
                                {
                                    id: 119,
                                    num: 19,
                                    type: "multiple-choice",
                                    questionText: "Question 19: According to the passage, educational institutions can promote multicultural understanding by:",
                                    options: [
                                        { key: "A", text: "excluding traditional subjects from the curriculum" },
                                        { key: "B", text: "incorporating multicultural education into their curricula" },
                                        { key: "C", text: "reducing the number of extracurricular activities" },
                                        { key: "D", text: "focusing solely on local traditions" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Đoạn 4 nêu rõ: 'Schools and universities can incorporate multicultural education into their curricula...'."
                                },
                                {
                                    id: 120,
                                    num: 20,
                                    type: "multiple-choice",
                                    questionText: "Question 20: Which of the following is NOT mentioned as a benefit of living in a multicultural world?",
                                    options: [
                                        { key: "A", text: "Stimulating creativity and innovation" },
                                        { key: "B", text: "Learning new languages and cuisines" },
                                        { key: "C", text: "Reducing economic disparities" },
                                        { key: "D", text: "Fostering unity and mutual respect" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Đoạn 2 nhắc đến khám phá ẩm thực/ngôn ngữ (B), đoàn kết & tôn trọng (D), sáng tạo & đổi mới (A). Việc 'giảm bất bình đẳng kinh tế' (C) không được đề cập."
                                },
                                {
                                    id: 121,
                                    num: 21,
                                    type: "multiple-choice",
                                    questionText: "Question 21: The passage suggests that the challenges of a multicultural world can be addressed by:",
                                    options: [
                                        { key: "A", text: "avoiding interactions with different cultures" },
                                        { key: "B", text: "promoting equality and social cohesion" },
                                        { key: "C", text: "ignoring cultural differences" },
                                        { key: "D", text: "focusing on economic growth" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Câu cuối đoạn 3: 'Addressing these issues requires concerted efforts from governments, communities, and individuals to promote equality and social cohesion.'"
                                },
                                {
                                    id: 122,
                                    num: 22,
                                    type: "multiple-choice",
                                    questionText: "Question 22: Which of the following can be inferred from the passage?",
                                    options: [
                                        { key: "A", text: "Multiculturalism always leads to conflicts." },
                                        { key: "B", text: "Understanding other cultures requires effort and open-mindedness." },
                                        { key: "C", text: "Homogeneous societies are more peaceful than multicultural ones." },
                                        { key: "D", text: "Cultural exchanges are declining in modern cities." }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Đoạn 3 suy ra: Việc thấu hiểu các nền văn hóa khác đòi hỏi nỗ lực đối thoại và tư duy cởi mở ('requiring individuals to be open-minded and empathetic... concerted efforts')."
                                }
                            ]
                        }
                    ]
                },
                {
                    sectionId: "u2-write",
                    title: "III. WRITING",
                    parts: [
                        {
                            partId: "u2-write-p1",
                            title: "PART 1: Sentence Arrangement (Questions 23 - 24)",
                            questions: [
                                {
                                    id: 123,
                                    num: 23,
                                    type: "multiple-choice",
                                    questionText: `Question 23: Arrange the sentences to make a meaningful text:<br>
<div class="arrange-box">
<strong>a.</strong> Secondly, it's a good idea that you try to cook traditional food frequently.<br>
<strong>b.</strong> There are two main ways to maintain your cultural identity in a new culture.<br>
<strong>c.</strong> Staying connected with your family and friends helps you to feel part of your native culture.<br>
<strong>d.</strong> You should also remember to make mealtimes special and important occasions.<br>
<strong>e.</strong> Firstly, keep in touch with people you know back home.
</div>`,
                                    options: [
                                        { key: "A", text: "c – a – d – e – a" },
                                        { key: "B", text: "b – a – e – d – c" },
                                        { key: "C", text: "b – e – d – a – c" },
                                        { key: "D", text: "b – e – c – a – d" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Trình tự: (b) Nêu chủ đề 2 cách giữ bản sắc -> (e) Ý thứ nhất: Giữ liên lạc với người ở quê nhà -> (c) Giải thích chi tiết cho ý 1 -> (a) Ý thứ hai: Nấu món ăn truyền thống -> (d) Bổ sung cho ý thứ hai về bữa ăn."
                                },
                                {
                                    id: 124,
                                    num: 24,
                                    type: "multiple-choice",
                                    questionText: `Question 24: Arrange the sentences to make a meaningful letter:<br>
<div class="arrange-box">
<strong>a.</strong> I hope you'll have the chance to explore and appreciate the wonders of Japanese culture someday.<br>
<strong>b.</strong> Finally, Japan's cuisine, including sushi and ramen, fascinates taste buds worldwide.<br>
<strong>c.</strong> Secondly, traditional customs like tea ceremonies and cherry blossom viewing reflect simplicity and beauty.<br>
<strong>d.</strong> Dear Sam, I'm excited to share with you about the rich culture of Japan.<br>
<strong>e.</strong> Overall, Japan's culture is a blend of tradition and modernity, captivating people with its unique customs and practices.<br>
<strong>f.</strong> Firstly, Japanese culture values harmony and respect for others.
</div>`,
                                    options: [
                                        { key: "A", text: "d – f – c – b – e – a" },
                                        { key: "B", text: "d – f – c – b – a – e" },
                                        { key: "C", text: "d – f – b – c – a – e" },
                                        { key: "D", text: "d – f – c – a – b – e" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Trình tự hợp lý: (d) Lời chào Dear Sam -> (f) Luận điểm 1: Firstly -> (c) Luận điểm 2: Secondly -> (b) Luận điểm 3: Finally -> (e) Tóm tắt chung: Overall -> (a) Lời chúc kết thúc thư."
                                }
                            ]
                        },
                        {
                            partId: "u2-write-p2",
                            title: "PART 2: Sentence Transformation (Questions 25 - 28)",
                            questions: [
                                {
                                    id: 125,
                                    num: 25,
                                    type: "sentence-rewrite",
                                    originalSentence: "I have not seen him for ten years.",
                                    promptText: "The last time",
                                    sampleAnswer: "The last time I saw him was ten years ago.",
                                    acceptableAnswers: [
                                        "The last time I saw him was ten years ago."
                                    ],
                                    explanation: "Cấu trúc chuyển đổi thì: S + haven't/hasn't + V3 + for + time -> The last time + S + V2 + was + time + ago."
                                },
                                {
                                    id: 126,
                                    num: 26,
                                    type: "sentence-rewrite",
                                    originalSentence: "This country is the most beautiful place I've ever visited.",
                                    promptText: "I have never",
                                    sampleAnswer: "I have never visited a more beautiful place than this country.",
                                    acceptableAnswers: [
                                        "I have never visited a more beautiful place than this country.",
                                        "I have never visited such a beautiful place like this country.",
                                        "I have never visited such a beautiful place as this country."
                                    ],
                                    explanation: "Chuyển từ câu so sánh nhất sang câu Hiện tại hoàn thành dùng 'never' kết hợp so sánh hơn (hoặc such a...)."
                                },
                                {
                                    id: 127,
                                    num: 27,
                                    type: "sentence-rewrite",
                                    originalSentence: "I haven't lived in such a friendly neighbourhood before.",
                                    promptText: "This is the first time",
                                    sampleAnswer: "This is the first time I have lived in such a friendly neighbourhood.",
                                    acceptableAnswers: [
                                        "This is the first time I have lived in such a friendly neighbourhood.",
                                        "This is the first time I have ever lived in such a friendly neighbourhood."
                                    ],
                                    explanation: "Cấu trúc: S + haven't + V3 ... before -> This is the first time + S + have/has + (ever) + V3."
                                },
                                {
                                    id: 128,
                                    num: 28,
                                    type: "sentence-rewrite",
                                    originalSentence: "No mountains in the Indochinese Peninsula are higher than Fansipan.",
                                    promptText: "Fansipan is the",
                                    sampleAnswer: "Fansipan is the highest mountain in the Indochinese Peninsula.",
                                    acceptableAnswers: [
                                        "Fansipan is the highest mountain in the Indochinese Peninsula."
                                    ],
                                    explanation: "Không ngọn núi nào cao hơn Fansipan -> Fansipan là ngọn núi cao nhất (so sánh nhất: the highest mountain)."
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            unitCode: "UNIT 3",
            title: "GREEN LIVING",
            sections: [
                {
                    sectionId: "u3-lang",
                    title: "I. LANGUAGE",
                    parts: [
                        {
                            partId: "u3-p1",
                            title: "Announcement of School Green Club (Questions 1 - 5)",
                            passage: `<strong>ANNOUNCEMENT OF SCHOOL GREEN CLUB</strong><br><br>
Are you <strong>(1) _____</strong> about sustainability and protecting our planet?<br>
Join us for our first project this Sunday <strong>(2) _____</strong> May of 15th.<br>
Hundreds trees <strong>(3) _____</strong> along Sweet Road in the morning and we also will clean up the river bank in <strong>(4) _____</strong> afternoon.<br>
<strong>(5) _____</strong> you need more information, please contact Mr. Trung via zalo 0933444556.`,
                            questions: [
                                {
                                    id: 201,
                                    num: 1,
                                    type: "multiple-choice",
                                    questionText: "Question 1:",
                                    options: [
                                        { key: "A", text: "passionate" },
                                        { key: "B", text: "interested" },
                                        { key: "C", text: "keen" },
                                        { key: "D", text: "excited" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Cụm tính từ đi với giới từ 'about': 'be passionate about' (đam mê, tâm huyết). 'interested' đi với 'in', 'keen' đi với 'on'."
                                },
                                {
                                    id: 202,
                                    num: 2,
                                    type: "multiple-choice",
                                    questionText: "Question 2:",
                                    options: [
                                        { key: "A", text: "on" },
                                        { key: "B", text: "at" },
                                        { key: "C", text: "in" },
                                        { key: "D", text: "of" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Trước thứ trong tuần (Sunday) và ngày cụ thể trong tháng dùng giới từ chỉ thời gian 'on'."
                                },
                                {
                                    id: 203,
                                    num: 3,
                                    type: "multiple-choice",
                                    questionText: "Question 3:",
                                    options: [
                                        { key: "A", text: "will plant" },
                                        { key: "B", text: "are plant" },
                                        { key: "C", text: "will be planted" },
                                        { key: "D", text: "Plant" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Chủ ngữ 'Hundreds trees' (Hàng trăm cái cây) là sự vật chịu tác động, chia bị động thì Tương lai đơn: 'will be planted'."
                                },
                                {
                                    id: 204,
                                    num: 4,
                                    type: "multiple-choice",
                                    questionText: "Question 4:",
                                    options: [
                                        { key: "A", text: "an" },
                                        { key: "B", text: "the" },
                                        { key: "C", text: "a" },
                                        { key: "D", text: "Ø" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Cụm chỉ buổi trong ngày cố định dùng mạo từ xác định: 'in the afternoon'."
                                },
                                {
                                    id: 205,
                                    num: 5,
                                    type: "multiple-choice",
                                    questionText: "Question 5:",
                                    options: [
                                        { key: "A", text: "Should" },
                                        { key: "B", text: "Were" },
                                        { key: "C", text: "Are" },
                                        { key: "D", text: "Had" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Đảo ngữ câu điều kiện loại 1: 'Should + S + V(nguyên mẫu), ...' thay thế cho 'If you need more information...'."
                                }
                            ]
                        },
                        {
                            partId: "u3-p2",
                            title: "School Youth Union Message (Questions 6 - 10)",
                            passage: `<strong>SCHOOL YOUTH UNION MESSAGE</strong><br><br>
Let's protect our planet, together!<br>
• Reduce waste by using <strong>(6) _____</strong> bags and bottles.<br>
• Recycle paper, plastic, and glass.<br>
• Conserve energy by <strong>(7) _____</strong> lights and electronics when not in use.<br>
• Plant trees and participate <strong>(8) _____</strong> clean-up events.<br>
Small actions make a big <strong>(9) _____</strong>!<br>
Let's <strong>(10) _____</strong> our school and environment clean and green.`,
                            questions: [
                                {
                                    id: 206,
                                    num: 6,
                                    type: "multiple-choice",
                                    questionText: "Question 6:",
                                    options: [
                                        { key: "A", text: "powered" },
                                        { key: "B", text: "reusable" },
                                        { key: "C", text: "extinct" },
                                        { key: "D", text: "conscious" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Để giảm rác thải ('reduce waste'), giải pháp là dùng túi và chai 'tái sử dụng được' ('reusable')."
                                },
                                {
                                    id: 207,
                                    num: 7,
                                    type: "multiple-choice",
                                    questionText: "Question 7:",
                                    options: [
                                        { key: "A", text: "basing on" },
                                        { key: "B", text: "applying for" },
                                        { key: "C", text: "turning off" },
                                        { key: "D", text: "cutting down" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Tiết kiệm năng lượng bằng cách 'tắt đèn và thiết bị' khi không dùng -> 'turning off'."
                                },
                                {
                                    id: 208,
                                    num: 8,
                                    type: "multiple-choice",
                                    questionText: "Question 8:",
                                    options: [
                                        { key: "A", text: "on" },
                                        { key: "B", text: "at" },
                                        { key: "C", text: "for" },
                                        { key: "D", text: "in" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Cụm động từ cố định 'participate in' (tham gia vào sự kiện)."
                                },
                                {
                                    id: 209,
                                    num: 9,
                                    type: "multiple-choice",
                                    questionText: "Question 9:",
                                    options: [
                                        { key: "A", text: "difference" },
                                        { key: "B", text: "different" },
                                        { key: "C", text: "differently" },
                                        { key: "D", text: "differs" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Cụm thành ngữ cố định 'make a big difference' (tạo nên sự khác biệt lớn). Sau tính từ 'big' cần danh từ 'difference'."
                                },
                                {
                                    id: 210,
                                    num: 10,
                                    type: "multiple-choice",
                                    questionText: "Question 10:",
                                    options: [
                                        { key: "A", text: "set" },
                                        { key: "B", text: "choose" },
                                        { key: "C", text: "keep" },
                                        { key: "D", text: "have" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Cấu trúc 'keep + tân ngữ + tính từ': 'keep our school clean and green' (giữ cho trường học sạch và xanh)."
                                }
                            ]
                        }
                    ]
                },
                {
                    sectionId: "u3-read",
                    title: "II. READING",
                    parts: [
                        {
                            partId: "u3-read-p1",
                            title: "PART 1: Disadvantages of plastic bags (Questions 11 - 15)",
                            passage: `Using plastic bags poses several disadvantages to <strong>(11) _____</strong>. Firstly, plastic bags often end up inlandfills, where they take hundreds of years to decompose, <strong>(12) _____</strong>. Secondly, many plastic bags aren't reused or recycled, worsening the waste problem.<br><br>
Thirdly, plastic bags can contaminate soil and waterways, harming wildlife and ecosystems. Moreover, the production of plastic bags <strong>(13) _____</strong> and contributes to greenhouse gas emissions. Finally, <strong>(14) _____</strong> causes environmental degradation and then increases human health risks. To mitigate these issues, it is essential to <strong>(15) _____</strong> and adopt more sustainable alternatives.`,
                            questions: [
                                {
                                    id: 211,
                                    num: 11,
                                    type: "multiple-choice",
                                    questionText: "Question 11:",
                                    options: [
                                        { key: "A", text: "either the environment nor human health" },
                                        { key: "B", text: "neither the environment or human health" },
                                        { key: "C", text: "both the environment and human health" },
                                        { key: "D", text: "not only the environment and human health" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Cặp liên từ tương quan chuẩn xác là 'both ... and ...' (cả môi trường lẫn sức khỏe con người)."
                                },
                                {
                                    id: 212,
                                    num: 12,
                                    type: "multiple-choice",
                                    questionText: "Question 12:",
                                    options: [
                                        { key: "A", text: "which contributes to pollution and habitat destruction" },
                                        { key: "B", text: "when it contributes to pollution and habitat destruction" },
                                        { key: "C", text: "which it contributes to pollution and habitat destruction" },
                                        { key: "D", text: "contributed to pollution and habitat destruction" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Mệnh đề quan hệ nối tiếp đứng sau dấu phẩy dùng 'which' thay thế cho toàn bộ sự việc phía trước, động từ chia số ít 'contributes'."
                                },
                                {
                                    id: 213,
                                    num: 13,
                                    type: "multiple-choice",
                                    questionText: "Question 13:",
                                    options: [
                                        { key: "A", text: "consumes valuable resources" },
                                        { key: "B", text: "consumed valuable resources" },
                                        { key: "C", text: "consuming valuable resources" },
                                        { key: "D", text: "to consume valuable resources" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Chủ ngữ là danh từ số ít 'the production of plastic bags', nối với 'and contributes' ở thì Hiện tại đơn -> động từ chia 'consumes'."
                                },
                                {
                                    id: 214,
                                    num: 14,
                                    type: "multiple-choice",
                                    questionText: "Question 14:",
                                    options: [
                                        { key: "A", text: "the use of widespread plastic bags" },
                                        { key: "B", text: "the widespread use of plastic bags" },
                                        { key: "C", text: "the widespread plastic bags use" },
                                        { key: "D", text: "the plastic bags of widespread use" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Trật tự cụm danh từ chuẩn: 'the widespread use of plastic bags' (việc sử dụng rộng rãi túi nilon)."
                                },
                                {
                                    id: 215,
                                    num: 15,
                                    type: "multiple-choice",
                                    questionText: "Question 15:",
                                    options: [
                                        { key: "A", text: "reduce the use of plastic bags" },
                                        { key: "B", text: "reducing the use of plastic bags" },
                                        { key: "C", text: "reduced the use of plastic bags" },
                                        { key: "D", text: "reduces the use of plastic bags" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Cấu trúc: 'It is essential to + V(nguyên mẫu)' (song song với 'adopt' phía sau 'and') -> 'reduce the use of plastic bags'."
                                }
                            ]
                        },
                        {
                            partId: "u3-read-p2",
                            title: "PART 2: History of fire and lighting (Questions 16 - 22)",
                            passage: `It is hard to think of a world without gas or electricity. Both are commonly used for lighting and heating today. We now can instantly flick a lighter or strike a match to make a flame. But it was not long ago that there were no such things as matches or lighters. To make fire, it was necessary to strike a piece of iron on flint for sparks to ignite some tinder. If the tinder was damp, or the flint old, you had to borrow some fire from a neighbor.<br><br>
We do not know exactly when or how people first used fire. Perhaps, many ages ago, they found that sticks would burn if they were dropped into some hole where melted lava from a volcano lay boiling. They brought the lighted sticks back to make their fire in a cave. Or, they may have seen trees catch fire through being struck by lightning, and used the trees to start their own fire.<br><br>
Gradually people learned they could start a fire without traveling far to find flames. They rubbed two pieces of wood together. This method was used for thousands of years.<br><br>
When people became used to making fires with which to cook food and stay warm at night, they found that certain resins or gums from trees burnt longer and brighter. They melted resins and dipped branches in the liquid to make torches that lit their homes at night. Iron stands in which torches used to be fixed can still be seen in old buildings of Europe.<br><br>
There was no lighting in city streets until gas lamps, and then electric lamps were installed. Boys ran about London at night carrying torches of burning material. They were called torch boys, or link boys, and earned a living by guiding visitors to friends' houses at night.<br><br>
For centuries homes were lit by candles until oil was found. Even then, oil lamps were no more effective than a cluster of candles. We read about the splendors and marvels of ancient palaces and castles, but we forget that they must have been gloomy and murky places at night.`,
                            questions: [
                                {
                                    id: 216,
                                    num: 16,
                                    type: "multiple-choice",
                                    questionText: "Question 16: What is the passage mainly about?",
                                    options: [
                                        { key: "A", text: "The development of methods for making and using fire and lighting" },
                                        { key: "B", text: "The importance of gas and electricity in modern cities" },
                                        { key: "C", text: "The different ways people used candles to light their homes" },
                                        { key: "D", text: "The history of gas lamps and electric lamps in Europe" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Bài đọc trình bày quá trình lịch sử tiến hóa của các phương pháp tạo ra lửa và thắp sáng từ thời tiền sử đến hiện đại."
                                },
                                {
                                    id: 217,
                                    num: 17,
                                    type: "multiple-choice",
                                    questionText: "Question 17: What does 'they' refer to in paragraph 2?",
                                    options: [
                                        { key: "A", text: "people" },
                                        { key: "B", text: "ages" },
                                        { key: "C", text: "sticks" },
                                        { key: "D", text: "trees" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Trong câu: 'they found that sticks would burn if they were dropped into some hole...', đại từ 'they' thứ hai thay thế cho danh từ 'sticks' (những cành cây)."
                                },
                                {
                                    id: 218,
                                    num: 18,
                                    type: "multiple-choice",
                                    questionText: "Question 18: It is stated in the passage that torches for lighting were made from:",
                                    options: [
                                        { key: "A", text: "the wood of gum trees" },
                                        { key: "B", text: "iron bars dipped in melted resins" },
                                        { key: "C", text: "wooden poles dipped in oil" },
                                        { key: "D", text: "tree branches dipped in melted resins" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Thông tin ở đoạn 4: 'They melted resins and dipped branches in the liquid to make torches that lit their homes at night.' (Cành cây nhúng vào nhựa đun chảy)."
                                },
                                {
                                    id: 219,
                                    num: 19,
                                    type: "multiple-choice",
                                    questionText: "Question 19: It is mentioned in the passage that before the electric lamp was invented:",
                                    options: [
                                        { key: "A", text: "oil lamps and then candles were used" },
                                        { key: "B", text: "candles and oil lamps appeared about the same time" },
                                        { key: "C", text: "candles and then oil lamps were used" },
                                        { key: "D", text: "people did not use any form of lighting in their houses" }
                                    ],
                                    correctAnswer: "C",
                                    explanation: "Đoạn cuối: 'For centuries homes were lit by candles until oil was found.' (Nhà cửa được thắp bằng nến, sau đó dầu mới được tìm ra)."
                                },
                                {
                                    id: 220,
                                    num: 20,
                                    type: "multiple-choice",
                                    questionText: "Question 20: The word 'splendors' in the passage could be best replaced by which of the following?",
                                    options: [
                                        { key: "A", text: "expensive object" },
                                        { key: "B", text: "places of scenic beauty" },
                                        { key: "C", text: "achievements" },
                                        { key: "D", text: "the beautiful and impressive features" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "'Splendors' (sự tráng lệ, nguy nga lộng lẫy) đồng nghĩa với 'the beautiful and impressive features'."
                                },
                                {
                                    id: 221,
                                    num: 21,
                                    type: "multiple-choice",
                                    questionText: "Question 21: According to the passage, which of the following sentences is NOT true?",
                                    options: [
                                        { key: "A", text: "We know exactly when and how people first used fire" },
                                        { key: "B", text: "Before gas lamps and electric lamps appeared, streets were lit by torches" },
                                        { key: "C", text: "We can make a fire by striking a piece of iron on flint to ignite some tinder" },
                                        { key: "D", text: "Matches and lighters were invented not long ago" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "Câu đầu đoạn 2 nêu: 'We do not know exactly when or how people first used fire.' (Chúng ta không biết chính xác khi nào hay bằng cách nào con người lần đầu dùng lửa), nên A là khẳng định sai."
                                },
                                {
                                    id: 222,
                                    num: 22,
                                    type: "multiple-choice",
                                    questionText: "Question 22: The word 'gloomy' in the passage is opposite in meaning to:",
                                    options: [
                                        { key: "A", text: "light" },
                                        { key: "B", text: "badly decorated" },
                                        { key: "C", text: "containing a lot of white" },
                                        { key: "D", text: "mysterious" }
                                    ],
                                    correctAnswer: "A",
                                    explanation: "'Gloomy' nghĩa là 'tối tăm, u ám', trái nghĩa với 'light' (sáng sủa)."
                                }
                            ]
                        }
                    ]
                },
                {
                    sectionId: "u3-write",
                    title: "III. WRITING",
                    parts: [
                        {
                            partId: "u3-write-p1",
                            title: "PART 1: Paragraph Arrangement (Questions 23 - 24)",
                            questions: [
                                {
                                    id: 223,
                                    num: 23,
                                    type: "multiple-choice",
                                    questionText: `Question 23: Arrange the sentences to make a meaningful paragraph:<br>
<div class="arrange-box">
<strong>a.</strong> Therefore, we recommend that you put the suggested solutions into practice as soon as possible.<br>
<strong>b.</strong> Third, we recommend that we make use of plastic waste in arts and crafts projects, for example, for making plant pots or bird feeders.<br>
<strong>c.</strong> Second, the Youth Union should hold regular sessions to teach students how to recycle properly.<br>
<strong>d.</strong> This report suggests three main solutions to the problem of single-use products in our school.<br>
<strong>e.</strong> First, we suggest that the school should provide more recycling bins.<br>
<strong>f.</strong> Reusing and recycling single-use plastics will lead to a greener school environment and help promote a green lifestyle among young people.
</div>`,
                                    options: [
                                        { key: "A", text: "d – e – c – f – b – a" },
                                        { key: "B", text: "d – e – c – b – a – f" },
                                        { key: "C", text: "d – e – b – c – f – a" },
                                        { key: "D", text: "d – e – c – b – f – a" }
                                    ],
                                    correctAnswer: "D",
                                    explanation: "Trình tự logic của bản báo cáo: (d) Mở đầu giới thiệu 3 giải pháp -> (e) Giải pháp 1: First -> (c) Giải pháp 2: Second -> (b) Giải pháp 3: Third -> (f) Đánh giá lợi ích chung của tái chế -> (a) Kết luận: Therefore, recommend putting into practice."
                                },
                                {
                                    id: 224,
                                    num: 24,
                                    type: "multiple-choice",
                                    questionText: `Question 24: Arrange the sentences to make a meaningful paragraph:<br>
<div class="arrange-box">
<strong>a.</strong> First of all, it's carbon neutral and powered by solar energy, which impressed me.<br>
<strong>b.</strong> It's a perfect blend of luxury and eco-consciousness<br>
<strong>c.</strong> Finally, knowing I was staying in a place committed to sustainability added to my enjoyment.<br>
<strong>d.</strong> Next, the hospitality was exceptional, making me feel at home.<br>
<strong>e.</strong> I recently stayed at an amazing eco-resort located in the South of Vietnam.<br>
<strong>f.</strong> I highly recommend this eco-resort to anyone seeking a peaceful retreat with a minimal environmental footprint.<br>
<strong>g.</strong> The fresh air and breathtaking views were refreshing.
</div>`,
                                    options: [
                                        { key: "A", text: "e – a – b – g – d – f – c" },
                                        { key: "B", text: "e – a – d – g – c – f – b" },
                                        { key: "C", text: "e – b – a – g – c – d – f" },
                                        { key: "D", text: "e – a – c – d – g – f – b" }
                                    ],
                                    correctAnswer: "B",
                                    explanation: "Trình tự: (e) Mở đầu kể về chuyến nghỉ dưỡng ở eco-resort -> (a) First of all: năng lượng mặt trời -> (d) Next: sự hiếu khách -> (g) Không khí trong lành -> (c) Finally: cảm giác bền vững -> (f) Lời giới thiệu -> (b) Câu đúc kết chung."
                                }
                            ]
                        },
                        {
                            partId: "u3-write-p2",
                            title: "PART 2: Sentence Transformation (Questions 25 - 28)",
                            questions: [
                                {
                                    id: 225,
                                    num: 25,
                                    type: "sentence-rewrite",
                                    originalSentence: "The researchers conducted a survey about students' lifestyles.",
                                    promptText: "The researchers carried",
                                    sampleAnswer: "The researchers carried out a survey about students' lifestyles.",
                                    acceptableAnswers: [
                                        "The researchers carried out a survey about students' lifestyles."
                                    ],
                                    explanation: "Cụm động từ 'carry out' đồng nghĩa với 'conduct' (tiến hành, thực hiện cuộc khảo sát)."
                                },
                                {
                                    id: 226,
                                    num: 26,
                                    type: "sentence-rewrite",
                                    originalSentence: "Please switch on the computer before the lesson starts.",
                                    promptText: "Please turn",
                                    sampleAnswer: "Please turn on the computer before the lesson starts.",
                                    acceptableAnswers: [
                                        "Please turn on the computer before the lesson starts."
                                    ],
                                    explanation: "Cụm động từ 'turn on' đồng nghĩa với 'switch on' (bật thiết bị)."
                                },
                                {
                                    id: 227,
                                    num: 27,
                                    type: "sentence-rewrite",
                                    originalSentence: "My sister takes care of our grandmother every day.",
                                    promptText: "My sister looks",
                                    sampleAnswer: "My sister looks after our grandmother every day.",
                                    acceptableAnswers: [
                                        "My sister looks after our grandmother every day."
                                    ],
                                    explanation: "Cụm động từ 'look after' đồng nghĩa với 'take care of' (chăm sóc)."
                                },
                                {
                                    id: 228,
                                    num: 28,
                                    type: "sentence-rewrite",
                                    originalSentence: "The students exercise regularly to stay healthy.",
                                    promptText: "The students work",
                                    sampleAnswer: "The students work out regularly to stay healthy.",
                                    acceptableAnswers: [
                                        "The students work out regularly to stay healthy."
                                    ],
                                    explanation: "Cụm động từ 'work out' đồng nghĩa với 'exercise' (tập thể dục, rèn luyện thân thể)."
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

if (typeof window !== "undefined") {
    window.EXAM_DATA = EXAM_DATA;
}
