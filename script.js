if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/pwabuilder-sw.js')
        .then((registration) => {
            console.log('Service Worker зарегистрирован успешно:', registration);
        })
        .catch((error) => {
            console.log('Ошибка при регистрации Service Worker:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const resetButton = document.getElementById("resetButton");
    const lbl_result = document.getElementById("lbl_result");
    const collectionView = document.getElementById("collectionView");
    const exercisePicker = document.getElementById("exercisePicker");

    const COUNT_BLOCKS = 3;
    let ExerciseList = [];

    function Exercise(iconPath, name, description) {
        this.iconPath = iconPath;
        this.name = name;
        this.description = description;
    }

    function initExerciseList() {
        for (let i = 0; i < COUNT_BLOCKS; i++) {
            ExerciseList.push([]);
        }

        initMovementList();
        initImitationsList();
        initStuffingList();
    }

    function initMovementList() {
        ExerciseList[0].push(new Exercise("icons/П1.jpg", "Приставные шаги", "Передвижение приставным шагом (4 шага) вправо и не меняя положения тела, выполнить 4 приставных шага влево, 30 секунд"));
        ExerciseList[0].push(new Exercise("icons/П2.jpg", "Приставные шаги в стойке теннисиста", "Передвижение приставным шагом (4 шага) в стойке теннисиста вправо и не меняя положения тела, выполнить 4 приставных шага влево, 30 секунд"));
        ExerciseList[0].push(new Exercise("icons/П3.jpg", "Попеременные приставные шаги (2 шага)", "Передвижение приставным шагом в стойке теннисиста правым и левым боком (по 2 шага) попеременно, 30 секунд"));
        ExerciseList[0].push(new Exercise("icons/П4.jpg", "Попеременные приставные шаги (1 шаг)", "Передвижение приставным шагом в стойке теннисиста правым и левым боком (по 1 шагу) попеременно, 30 секунд"));
        ExerciseList[0].push(new Exercise("icons/П5.jpg", "Восьмерка", "Передвижение приставными шагами в стойке теннисиста по восьмерке, 4 шага в каждую сторону, касаясь правой рукой отметок, 1 минута. Записать количество выполненных касаний"));
        ExerciseList[0].push(new Exercise("icons/П6.jpg", "Змейка", "Передвижение приставными шагами в стойке теннисиста по змейке, обегая фишки (до 10 штук). Фишки располагаются в две линии в шахматном порядке. Движение начинается правым боком, обегаются все фишки, не меняя положения тела, возвращаемся на исходное позицию левым боком, обегая так же все фишки. Записать количество времени, потраченное на выполнение упражнения с учетом точности выполнения. За касание фишки ногами штраф +0,3 сек"));
    }

    function initImitationsList() {
        ExerciseList[1].push(new Exercise("icons/И1.jpg", "Имитация удара накатом слева", "Упражнение выполняется в стойке теннисиста, ноги в широкой стойке согнуты в коленях, корпус наклонен немного вперед, правая нога чуть впереди, левая позади. Центр тяжести распределен равномерно на обе ноги. Движение начинать с небольшого замаха снизу, руку проводить перед собой вперед, имитируя касания ракеткой по мячу (как бы накрывая мяч ракеткой), в конце движения центр тяжести смещается на правую ногу, рука при этом почти выпрямлена, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И2.jpg", "Имитация удара накатом справа", "Упражнение выполняется в стойке теннисиста, ноги в широкой стойке согнуты в коленях, корпус наклонен немного вперед, левая нога чуть впереди, правая позади. Центр тяжести распределен равномерно на обе ноги. Движение начинать с небольшого замаха рукой назад, при этом плечо и предплечье образуют угол 110-120. Движение руки выполнять перед собой по траектории вперед-вверх, имитируя касания ракеткой по мячу (как бы накрывая мяч ракеткой), в конце движения рука достигает уровня головы, центр тяжести смещен на левую ногу, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И3.jpg", "Накат справа + накат слева", "Имитация  наката справа и слева поочередно на месте, меняя стойку небольшим прыжком, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И4.jpg", "2 наката справа + 2 наката слева", "Имитация двух  накатов справа и слева поочередно на месте, меняя стойку небольшим прыжком, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И5.jpg", "Накат справа + приставной шаг + накат слева", "Имитация накатов справа и слева с двумя приставными шагами между ними, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И6.jpg", "Накат слева с отягощением", "Имитация накатов слева с утяжелителем на руке, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И7.jpg", "Накат справа с отягощением", "Имитация накатов справа с утяжелителем на руке, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И8.jpg", "Накат слева с ускорением", "Имитация накатов слева с максимальным увеличением скорости выполнения движения, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И9.jpg", "Накат справа с ускорением", "Имитация накатов справа с максимальным увеличением скорости выполнения движения, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И10.jpg", "Срезка слева", "Упражнение выполняется в стойке теннисиста, ноги в широкой стойке согнуты в коленях, корпус развернут вполоборота влево и наклонен немного вперед, правая нога чуть впереди, левая позади. Центр тяжести распределен равномерно на обе ноги. Движение начинать с небольшого замаха, при котором рука с ракеткой поднимается к левому плечу, затем руку проводить перед собой вниз-вперед, имитируя касания ракеткой под мячом (как бы создавая мячу углубление), в конце движения центр тяжести смещается на правую ногу, рука при этом почти выпрямлена, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И11.jpg", "Срезка справа", "Упражнение выполняется в стойке теннисиста, ноги в широкой стойке согнуты в коленях, корпус развернут вполоборота вправо и наклонен немного вперед, левая нога чуть впереди, правая позади. Центр тяжести распределен равномерно на обе ноги. Движение начинать с небольшого замаха, при котором рука с ракеткой поднимается к правому плечу, затем руку проводить перед собой вниз-вперед, имитируя касания ракеткой под мячом (как бы накрывая мяч ракеткой), в конце движения центр тяжести смещается на левую ногу. 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И12.jpg", "Срезка справа + срезка слева", "Имитация удара срезкой справа и слева поочередно (через раз), меняя стойку небольшим прыжком, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И13.jpg", "2 срезки справа + 2 срезки слева", "Имитация удара срезкой справа и слева поочередно (через два раза), меняя стойку небольшим прыжком, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И14.jpg", "Срезка справа + приставной шаг + срезка слева", "Имитация удара срезкой справа и слева поочередно перемещаясь после имитации удара приставным шагом на 2 шага в сторону и таким же образом обратно, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И15.jpg", "Срезка слева с отягощением", "Имитация удара срезкой слева с утяжелителем на руке, 30 секунд"));
        ExerciseList[1].push(new Exercise("icons/И16.jpg", "Срезка справа с отягощением", "Имитация удара срезкой справа с утяжелителем на руке, 30 секунд"));
    }

    function initStuffingList() {
        ExerciseList[2].push(new Exercise("icons/Н1.jpg", "Набивание мяча правой рукой ладонной стороной ракетки", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н2.jpg", "Набивание мяча правой рукой ладонной стороной ракетки, стоя на одной ноге", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н3.jpg", "Набивание мяча правой рукой ладонной стороной ракетки, сидя на стуле", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н4.jpg", "Набивание мяча правой рукой ладонной стороной ракетки, с поворотом вокруг своей оси после каждого удара", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н5.jpg", "Набивание мяча правой рукой тыльной стороной ракетки", "30 секунд."));
        ExerciseList[2].push(new Exercise("icons/Н6.jpg", "Набивание мяча правой рукой тыльной стороной ракетки, стоя на одной ноге", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н7.jpg", "Набивание мяча правой рукой тыльной стороной ракетки, сидя на стуле", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н8.jpg", "Набивание мяча правой рукой тыльной стороной ракетки, с поворотом вокруг своей оси после каждого удара", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н9.jpg", "Набивание мяча левой рукой ладонной стороной ракетки", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н10.jpg", "Набивание мяча левой рукой ладонной стороной ракетки, стоя на одной ноге", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н11.jpg", "Набивание мяча левой рукой ладонной стороной ракетки, сидя на стуле", "30 секунд."));
        ExerciseList[2].push(new Exercise("icons/Н12.jpg", "Набивание мяча левой рукой ладонной стороной ракетки, с поворотом вокруг своей оси после каждого удара", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н13.jpg", "Набивание мяча левой рукой тыльной стороной ракетки", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н14.jpg", "Набивание мяча левой рукой тыльной стороной ракетки, стоя на одной ноге", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н15.jpg", "Набивание мяча левой рукой тыльной стороной ракетки, сидя на стуле", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н16.jpg", "Набивание мяча левой рукой тыльной стороной ракетки, с поворотом вокруг своей оси после каждого удара", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н17.jpg", "Набивание мяча правой рукой поочередно ладонной и тыльной стороной ракетки", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н18.jpg", "Набивание мяча левой рукой поочередно ладонной и тыльной стороной ракетки", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н19.jpg", "Набивание мяча двумя руками поочередно ладонной стороной ракетки. Необходимо иметь две ракетки", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н20.jpg", "Набивание мяча двумя руками поочередно тыльной стороной ракетки. Необходимо иметь две ракетки", "30 секунд"));
        ExerciseList[2].push(new Exercise("icons/Н21.jpg", "Набивание мяча двумя руками, перехватывая ракетку с одной руки в другую", "30 секунд"));
    }


    function updateCollectionView(selectedIndex) {
        collectionView.innerHTML = "";

        ExerciseList[selectedIndex].forEach(exercise => {
            const trainingContainer = document.createElement('div');
            trainingContainer.classList.add('trainingContainer');

            trainingContainer.addEventListener('click', () => {
                trainingContainer.classList.toggle('expanded');
            });

            const left = document.createElement('div');
            left.classList.add('left');

            const trainingIcon = document.createElement('div');
            trainingIcon.classList.add('trainingIcon', 'left-top');

            const img = document.createElement('img');
            img.src = exercise.iconPath;
            img.alt = 'Иконка упражнения';

            const right = document.createElement('div');
            right.classList.add('right');

            const trainingName = document.createElement('div');
            trainingName.classList.add('trainingName', 'top-right');
            trainingName.textContent = exercise.name;

            const trainingDescription = document.createElement('div');
            trainingDescription.classList.add('trainingDescription', 'bottom-right');
            trainingDescription.textContent = exercise.description;

            trainingIcon.appendChild(img);
            left.appendChild(trainingIcon);
            right.appendChild(trainingName);
            right.appendChild(trainingDescription);
            trainingContainer.appendChild(left);
            trainingContainer.appendChild(right);
            collectionView.appendChild(trainingContainer);
        });
    }

    exercisePicker.addEventListener('change', () => {
        const selectedIndex = parseInt(exercisePicker.value, 10);
        updateCollectionView(selectedIndex);
    });

    let timer;
    let hours = 0, mins = 0, secs = 0, milliseconds = 0;

    let startTime;
    let pausedTime = 0;
    let isRunning = false;
    let animationId;

    startButton.addEventListener("click", () => {
        if (!isRunning) {
            startButton.style.display = "none";
            stopButton.style.display = "flex";
            isRunning = true;

            startTime = Date.now() - pausedTime;

            function updateTimer() {
                const currentTime = Date.now();
                const elapsedTime = currentTime - startTime;

                milliseconds = elapsedTime % 1000;
                secs = Math.floor(elapsedTime / 1000) % 60;
                mins = Math.floor(elapsedTime / (1000 * 60)) % 60;
                hours = Math.floor(elapsedTime / (1000 * 60 * 60));

                lbl_result.textContent = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(milliseconds).slice(0, 2).padStart(2, '0')}`;

                if (isRunning) {
                    animationId = requestAnimationFrame(updateTimer);
                }
            }

            updateTimer();
        }
    });

    stopButton.addEventListener("click", () => {
        isRunning = false;
        startButton.style.display = "flex";
        stopButton.style.display = "none";

        pausedTime = Date.now() - startTime;
    });

    resetButton.addEventListener("click", () => {
        cancelAnimationFrame(animationId);
        animationId = undefined;

        isRunning = false;

        lbl_result.textContent = "00:00:00.00";

        hours = 0;
        mins = 0;
        secs = 0;
        milliseconds = 0;

        stopButton.style.display = "none";
        startButton.style.display = "flex";

        clearInterval(timer);
        timer = null;

        pausedTime = 0;

    });

    function toggleAnimation(expanded) {
        const containers = document.querySelectorAll('.trainingContainer');

        containers.forEach(container => {
            if (expanded) {
                container.classList.add('expanded');
                // Ожидание конца анимации и затем изменение положения названия и описания
                setTimeout(() => {
                    container.querySelector('.trainingName').style.transform = 'translateY(0)';
                    container.querySelector('.trainingDescription').style.transform = 'translateY(0)';
                }, 500); // Ожидание окончания анимации иконки
            } else {
                container.classList.remove('expanded');
                // Ожидание начала анимации иконки
                container.querySelector('.trainingName').style.transform = 'translateY(-20px)';
                container.querySelector('.trainingDescription').style.transform = 'translateY(-20px)';
            }
        });
    }

    document.querySelectorAll('.trainingContainer').forEach(container => {
        container.addEventListener('click', () => {
            const isExpanded = container.classList.contains('expanded');
            toggleAnimation(!isExpanded);
        });
    });


    initExerciseList();
    updateCollectionView(0);
});