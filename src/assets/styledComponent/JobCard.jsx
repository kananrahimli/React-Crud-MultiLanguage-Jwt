import {styled} from 'styled-components'

const JobCard=styled.div`
    padding:  0px;
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: var(--shadow-2);

    .job-header{
        border-bottom: 1px solid var(--grey-400);

        .job-first-letter{
            font-size: 1.5rem;
            background-color: var(--primary-500);
            color: #fff;
            padding: 12px 24px;
            border-radius: 2px;
        }

        .job-name{
            font-size: 20px;
        }
        .job-company{
            font-size: 16px;
            color: var(--grey-400);
        }

       
    }

    .job-body{
        padding: 12px 24px;
        .job-info{
            font-size: 16px;
            display: flex;
            align-items: center;
  
            column-gap: 12px;
           

            .icon{
                color: var(--grey-400);
                font-size: 24px;
            }
        }

        .status{
            padding: 2px 24px;
            border-radius: 4px;
            &.declined{
                color: var(--red-dark);
                background-color:var(--red-light);
            }
            &.pending{
                color: var(--yellow-dark);
                background-color:var(--yellow-light);
            }
            &.interview{
                color: var(--green-dark);
                background-color:var(--green-light);
            }
        }
    }
    
`
export default JobCard