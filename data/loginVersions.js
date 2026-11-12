export const users = [
    { name: 'positive', username: 'standard_user', password: 'secret_sauce', login: true },
    { name: 'problem', username: 'problem_user', password: 'secret_sauce', login: true },
    { name: 'glitch', username: 'performance_glitch_user', password: 'secret_sauce', login: true },
    { name: 'error', username: 'error_user', password: 'secret_sauce', login: true },
    { name: 'visual', username: 'visual_user', password: 'secret_sauce', login: true },
    { name: 'locked', username: 'locked_out_user', password: 'secret_sauce', login: false, expectedError: 'Epic sadface: Sorry, this user has been locked out.' },
    { name: 'guwp', username: 'standard_user', password: 'santa', login: false, expectedError: 'Epic sadface: Username and password do not match any user in this service' },
    { name: 'wugp', username: 'oops', password: 'secret_sauce', login: false, expectedError: 'Epic sadface: Username and password do not match any user in this service' },
    { name: 'wuwp', username: 'oops', password: 'santa', login: false, expectedError: 'Epic sadface: Username and password do not match any user in this service' },
    { name: 'eugp', username: '', password: 'secret_sauce', login: false, expectedError: 'Epic sadface: Username is required' },
    { name: 'guep', username: 'standard_user', password: '', login: false, expectedError: 'Epic sadface: Password is required' },
    { name: 'euep', username: '', password: '', login: false, expectedError: 'Epic sadface: Username is required' }
]