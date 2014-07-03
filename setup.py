from setuptools import setup, find_packages

setup(
    name='Heart_Fat',
    version='0.0.1',
    packages=find_packages(),
    url='',
    license='BSD',
    author="Maarten Aerts, Savor d'Isavano",
    author_email='anohig_isavay@163.com',
    description='',
    install_requires=[
        'Django >= 1.6',
        'psycopg2 >= 2.5'
    ],
    setup_requires=[
        'nose'
    ],
    tests_require=[
        'nose',
        'coverage'
    ],
    test_suite='tests',
)
