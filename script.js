var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'http://nerdist.com/wp-content/uploads/2015/06/Wizarding-World-of-Harry-Potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        img: 'http://is4.mzstatic.com/image/thumb/Video30/v4/83/a8/ca/83a8ca3b-4d38-64ec-a789-005ea973af54/source/1200x630bb.jpg'
    },
    {
        id: 3,
        title: 'Ojciec chrzestny',
        desc: 'Film o mafii',
        img: 'https://tvgry.pl/galeria/hots/N640/545_303058416.jpg'
    },
    {
        id: 4,
        title: 'Szeregowiec Ryan',
        desc: 'Film o wojnie',
        img: 'http://is5.mzstatic.com/image/thumb/Video/v4/66/83/44/668344c7-a8fa-107c-72f9-b1fdceb226c6/source/1200x630bb.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id}, 
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {description: this.props.movie.desc}),
                React.createElement('img', {src: this.props.movie.img}),
            )
        )
    },
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.description)
        )
    },
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmwów'),
                React.createElement('ul', {}, moviesElements(this.props.movies))
            )
        )
    },
});

var moviesElements = function(movies) {
    return movies.map(function(movie) {
        return React.createElement(Movie, {key: movie.id, movie: movie});
    });
};

var element = React.createElement(MoviesList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));