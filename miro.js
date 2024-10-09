const maze = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1]
];

const playerPosition = { x: 1, y: 1 };
const goalPosition = { x: 4, y: 4 };

function createMaze() {
    const table = document.getElementById('maze');
    maze.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach((cell, colIndex) => {
            const td = document.createElement('td');
            td.className = cell === 1 ? 'wall' : 'path';
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    updatePlayerPosition();
}

function updatePlayerPosition() {
    const rows = document.querySelectorAll('#maze tr');
    rows.forEach((row, rowIndex) => {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, colIndex) => {
            cell.classList.remove('player', 'goal');
            if (rowIndex === playerPosition.y && colIndex === playerPosition.x) {
                cell.classList.add('player');
            }
            if (rowIndex === goalPosition.y && colIndex === goalPosition.x) {
                cell.classList.add('goal');
            }
        });
    });
}

function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    // 미로 벽 충돌 감지 (1은 벽)
    if (maze[newY][newX] === 1) {
        return; // 벽이면 이동하지 않음
    }

    // 플레이어 위치 업데이트
    playerPosition.x = newX;
    playerPosition.y = newY;
    updatePlayerPosition();

    // 목표 도달 체크
    if (playerPosition.x === goalPosition.x && playerPosition.y === goalPosition.y) {
        document.getElementById('status').textContent = '축하합니다! 목표에 도달했습니다!';
    }
}

// 화살표 키 입력 처리
window.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});

// 게임 시작 시 미로 생성
createMaze();
