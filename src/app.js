const PLAYERS = [
    'Spiderman',
    'Captain America',
    'Wonderwoman',
    'Popcorn',
    'Gemwoman',
    'Bolt',
    'Antwoman',
    'Mask',
    'Tiger',
    'Captain',
    'Catwoman',
    'Fish',
    'Hulk',
    'Ninja',
    'Black Cat',
    'Volverine',
    'Thor',
    'Slayer',
    'Vader',
    'Slingo',
  ];

const initPlayers = (players) => players.map((player, index) => ({
    name: player,
    strength: 2 + index,
    image: `images/super-${index + 1}.png`,
    type: index % 2 === 0 ? 'hero' : 'villain',
    id: index + 1,
}));

const getRandomStrength = () => Math.ceil(Math.random() * 100);

const view = (playerObj) => {
    const player = document.createElement('div');
    player.classList.add('player');

    const image = document.createElement('img');
    image.src = playerObj.image;
    image.alt = '';

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = playerObj.name;

    const strength = document.createElement('div');
    strength.className = 'strength';
    strength.textContent = playerObj.strength;

    player.append(image, name, strength);
    return player;
};

const buildPlayers = (players, type) => {
    const fragment = document.createElement('div');
    players
        .filter((player) => player.type === type)
        .forEach((player) => fragment.appendChild(view(player)));
    return fragment.innerHTML;
};

const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
};

window.onload = () => {
    const players = initPlayers(PLAYERS);
    viewPlayers(players);
};
