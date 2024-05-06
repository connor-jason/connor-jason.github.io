            // Cycle through developer words for the title
            document.addEventListener("DOMContentLoaded", function() {
                const developerWordElement = document.getElementById("developer-word");
                const developerWords = ["Python", "JavaScript", "Web", "Software"];
                let currentIndex = 0;

                function cycleDeveloperWord() {
                    developerWordElement.style.transition = "opacity 0.5s ease-in-out";
                    developerWordElement.style.opacity = 0;

                    setTimeout(() => {
                        currentIndex = (currentIndex + 1) % developerWords.length;
                        developerWordElement.textContent = developerWords[currentIndex];
                        developerWordElement.style.opacity = 1;
                    }, 350);
                }

                setInterval(cycleDeveloperWord, 2300);
            });