const examDate = new Date('2024-11-14T00:00:00');

        function updateCountdown() {
            const now = new Date();
            const timeDifference = examDate - now;

            if (timeDifference <= 0) {
                document.getElementById('countdown').innerText = 'D-Day';
                clearInterval(countdownInterval);
                return;
            }

            const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            document.getElementById('countdown').innerText = `D-${days}`;
        }

        const countdownInterval = setInterval(updateCountdown, 1000);

        function flipCard(cardContainer) {
          const card = cardContainer.querySelector('.card');
          card.classList.toggle('is-flipped');
      }

      const userName = localStorage.getItem("userName");
        if (userName) {
            document.getElementById("greeting").innerText = `${userName}님의
            첫 도전을 응원합니다.`;
        }
        function checkProgress() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            let checkedCount = 0;
            
            checkboxes.forEach((checkbox) => {
                if (checkbox.checked) checkedCount++;
            });

            const totalItems = checkboxes.length;
            const progressMessage = document.getElementById('progressMessage');

            if (checkedCount === totalItems) {
                progressMessage.textContent = "모든 준비 완료! 이제 마음 편히 시험을 보세요!!";
            } else {
                progressMessage.textContent = `현재 준비 ${checkedCount} / ${totalItems} 완료`;
            }
        }
  
        const quotes = [
            { text: "삶이 있는 한 희망은 있다", author: "키케로" },
            { text: "산다는것 그것은 치열한 전투이다.", author: "로망로랑" },
            { text: "언제나 현재에 집중할 수 있다면 행복할것이다", author: "파울로 코엘료" },
            { text: "피할수 없으면 즐겨라", author: "로버트 엘리엇" },
            { text: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다", author: "괴테" },
            { text: "겨울이 오면 봄이 멀지 않으리", author: "셸리" },
            { text: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다.", author: "베토벤" },
            { text: "문제점을 찾지 말고 해결책을 찾으라 ", author: "헨리포드" },
            { text: "생각은 마법의 열쇠예요", author: "피터팬" },
            { text: "가장 어두운 밤도 끝나고 해가 떠요", author: "빅터 휴고" },
            { text: "모든 모험은 어딘가로 향하는 출발점이 필요해", author: "이상한 나라의 앨리스" },
            { text: "마음이 얼마나 슬퍼도 계속 믿는다면 원하는 꿈은 이뤄질 거예요", author: "신데렐라" },
            { text: "역경에서 피어나는 꽃은 가장 희귀하고 아름다워요", author: "뮬란" },
            { text: "가끔 옳은 길은 가장 쉬운 길이 아니다", author: "그랜드 모프" },
            { text: "당신은 믿는 것보다 용감하고 보이는 것보다 강하며, 생각하는 것 보다 똑똑해", author: "곰돌이 푸" },
            { text: "믿음과 신뢰가 필요한 거야", author: "팅커벨" },
            { text: "기적도 조금의 시간이 필요해요", author: "신데렐라 요정 할매" },
            { text: "과거는 당신의 머리 속에 있고 미래는 당신의 손에 있어요 ", author: "피글렛" },
            { text: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라", author: "빌립보서 4장 13절" },
            { text: "그러나 내가 가는 길을 그가 아시나니 그가 나를 단련하신 후에는 내가 순금 같이 되어 나오리라", author: "욥기 23장 10절" },
            { text: "아가야 작은 파도들 때문에 스스로가 바다임을 잊지마라", author: "익명" },
            { text: "끝까지 달려왔으니 앞으로 18M만 더 가보자 수고했고! 축하한다!", author: "서울대 반수생" },
            { text: "재수 없이 대학 가라!", author: "이세이세이세현" },
            { text: "재수 없다!!", author: "나홀로집에있쥐" },
            { text: "뭐가 걱정이야! 너를 믿어!", author: "미세스 위~" },
            { text: "내가 노력한 만큼 마음껏 풀고 오기", author: "익명" },
            { text: "너의 앞길이 고속도로처럼 뻥뚤리길!! ", author: "난수능안볼꺼얏" }

        ];  
        
        function generateQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById("quote").textContent = quotes[randomIndex].text;
            document.getElementById("author").textContent = quotes[randomIndex].author;
        }

        document.querySelector('.button').addEventListener('click', function () {
            var audio = document.getElementById('audio-player');

            // 페이드 인 함수
            function fadeIn(audio, duration) {
                audio.volume = 0; // 볼륨을 0으로 시작
                audio.play();
                
                let step = 0.01; // 볼륨 증가 단계
                let interval = duration / (1 / step); // 페이드 인 속도 조절

                let fadeInterval = setInterval(function () {
                    if (audio.volume < 1) {
                        audio.volume = Math.min(1, audio.volume + step); // 볼륨 증가
                    } else {
                        clearInterval(fadeInterval); // 최대 볼륨에 도달하면 멈춤
                    }
                }, interval);
            }

            // 페이드 아웃 함수
            function fadeOut(audio, duration) {
                let step = 0.01; // 볼륨 감소 단계
                let interval = duration / (1 / step); // 페이드 아웃 속도 조절

                let fadeInterval = setInterval(function () {
                    if (audio.volume > 0) {
                        audio.volume = Math.max(0, audio.volume - step); // 볼륨 감소
                    } else {
                        audio.pause();
                        clearInterval(fadeInterval); // 볼륨이 0에 도달하면 멈춤
                    }
                }, interval);
            }

            // 오디오 상태에 따라 페이드 인 또는 페이드 아웃 실행
            if (audio.paused) {
                fadeIn(audio, 2000); // 2초 동안 페이드 인
            } else {
                fadeOut(audio, 2000); // 2초 동안 페이드 아웃
            }
        });

        document.getElementById("toggleButton").onclick = function() {
            var message = document.getElementById("message");
            var button = document.getElementById("toggleButton");
            
            if (message.style.display === "none") {
                message.style.display = "block";
                button.textContent = "-"; // 버튼 텍스트를 -로 변경
            } else {
                message.style.display = "none";
                button.textContent = "+"; // 버튼 텍스트를 +로 변경
            }
        };

        document.querySelectorAll('.toggle-button').forEach(button => {
            button.addEventListener('click', () => {
                const category = button.parentElement;
                category.classList.toggle('active');
                
                // aria-expanded 속성 업데이트
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !isExpanded);
            });
        });

        document.querySelectorAll('.toggle_button').forEach(button => {
            button.addEventListener('click', () => {
                const category = button.parentElement;
                category.classList.toggle('active');

                // 아이콘 변경 (화살표 회전)
                const icon = button.querySelector('.icon');
                if (category.classList.contains('active')) {
                    icon.style.transform = 'rotate(90deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });