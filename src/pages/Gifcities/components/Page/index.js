import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles'

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography/Typography";
import SearchIcon from '@material-ui/icons/Search';
import BackIcon from '@material-ui/icons/ChevronLeft';
import ForwardIcon from '@material-ui/icons/ChevronRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';

import {default as BasePage} from 'common/components/Page';
import GifCard from 'pages/Gifcities/components/GifCard';
import Spinner from 'common/components/Spinner';

import './index.scss';

const GIFS_PER_PAGE = 30;

const styles = theme => ({
    search: {
        padding: '8px 16px',
        width: '400px',
        height: '48px'
    },
    errorSearch: {
        'color': theme.palette.error.main,
        padding: '8px 16px',
        width: '400px'
    },
    button: {
        background: 'transparent',
        'box-shadow': 'none',
        color: theme.palette.text.primary
    },
    errorButton: {
        background: 'transparent',
        'box-shadow': 'none',
        'color': theme.palette.text.secondary,
        'background-color': theme.palette.error.main
    },
    paginationInput: {
        '-webkit-appearance': 'none',
        width: '50px'
    }
});

class Gifcities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            totalPages: 0,
            query: '',
            content: [],
            error: false,
            loading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            error: false,
            query: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.query === '' || !this.state.query) {
            this.setState({
                error: true,
                loading: false
            })
        } else {
            this.setState({
                loading: true
            }, () => {
                fetch(`https://gifcities.archive.org/api/v1/gifsearch?q=${this.state.query}`).then((res) => (
                    res.json()
                )).then((content) => {
                    this.setState({
                        content: content,
                        page: 0,
                        totalPages: Math.floor(content.length / GIFS_PER_PAGE),
                        error: false,
                        loading: false
                    })
                }).catch((err) => {
                    console.log(err);
                    this.setState({
                        error: true,
                        loading: false
                    })
                })
            })
        }

    }

    renderContent() {
        const renderedContent = [];
        const offset = this.state.page * GIFS_PER_PAGE;

        for (let i = offset; i < offset + GIFS_PER_PAGE; i++) {
            const data = this.state.content[i];
            if (!data) break;

            renderedContent.push(
                <GifCard key={i} gif={data.gif} text={data.url_text} className='gifcard' />
            )
        }

        return renderedContent;
    }

    renderPaginator() {
        return (
            <div className='paginator'>
                <IconButton onClick={() => {this.setState({page: 0})}}>
                    <FirstPageIcon/>
                </IconButton>
                <IconButton onClick={() => {this.setState({page: Math.max(0, this.state.page - 1)})}}>
                    <BackIcon/>
                </IconButton>
                <Typography className='page-display'>
                    {this.state.page + 1} / {this.state.totalPages + 1}
                </Typography>
                <IconButton onClick={() => {this.setState({page: Math.min(this.state.totalPages, this.state.page + 1)})}}>
                    <ForwardIcon/>
                </IconButton>
                <IconButton onClick={() => {this.setState({page: this.state.totalPages})}}>
                    <LastPageIcon/>
                </IconButton>
            </div>
        )
    }

    render() {
        return (
            <BasePage className='gifcities'>
                <form onSubmit={this.handleSubmit} className='search'>
                    <Input
                        disabled={this.state.loading}
                        autoFocus
                        disableUnderline
                        inputProps={{type: 'text', placeholder: 'Search'}}
                        className={this.state.error ? this.props.classes.errorSearch : this.props.classes.search}
                        onChange={this.handleChange}
                        endAdornment={
                            <InputAdornment position='end'>
                                <Fab
                                    disabled={this.state.loading}
                                    type='submit'
                                    color='secondary'
                                    size='small'
                                    className={this.state.error ? this.props.classes.errorButton : this.props.classes.button}
                                >
                                    <SearchIcon/>
                                </Fab>
                            </InputAdornment>
                        }
                    >
                    </Input>

                </form>
                {this.renderPaginator()}
                <div className='content'>
                    {
                        this.state.loading
                            ? <Spinner/>
                            : (this.state.content.length > 0) ? this.renderContent() : <Typography className='no-results'>Try searching for something</Typography>
                    }
                </div>
                {this.renderPaginator()}
            </BasePage>
        );
    }

}

export default withStyles(styles)(Gifcities);
